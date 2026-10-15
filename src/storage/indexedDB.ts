import { TestRecord } from '../types/test';

const DB_NAME = 'PowerChipTesterDB';
const DB_VERSION = 1;
const STORE_NAME = 'test_runs';
const MAX_SAVED_RECORDS = 5;

/**
 * Open or initialize IndexedDB instance
 */
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('createdAt', 'createdAt', { unique: false });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

/**
 * Save a test record and maintain at most 5 recent records in IndexedDB.
 * Uses JSON.parse(JSON.stringify(record)) to guarantee no Vue Proxy objects are passed to structuredClone.
 */
export async function saveTestRecord(record: TestRecord): Promise<void> {
  const db = await openDB();

  // Strip any Vue reactivity proxies to prevent DataCloneError
  const plainRecord = JSON.parse(JSON.stringify(record));

  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORE_NAME], 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    store.put(plainRecord);

    tx.oncomplete = async () => {
      try {
        await pruneOldRecords(db);
        resolve();
      } catch (err) {
        console.warn('Pruning error:', err);
        resolve();
      }
    };

    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Retrieve all records sorted by creation time (most recent first), max 5
 */
export async function getAllTestRecords(): Promise<TestRecord[]> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORE_NAME], 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const index = store.index('createdAt');
    const request = index.openCursor(null, 'prev'); // descending

    const records: TestRecord[] = [];

    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
      if (cursor && records.length < MAX_SAVED_RECORDS) {
        records.push(cursor.value);
        cursor.continue();
      } else {
        resolve(records);
      }
    };

    request.onerror = () => reject(request.error);
  });
}

/**
 * Get a specific test record by its ID
 */
export async function getTestRecordById(id: string): Promise<TestRecord | null> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORE_NAME], 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => {
      resolve(request.result || null);
    };

    request.onerror = () => reject(request.error);
  });
}

/**
 * Delete a specific test record
 */
export async function deleteTestRecord(id: string): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORE_NAME], 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(id);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Automatically delete older records so only the latest 5 are retained
 */
async function pruneOldRecords(db: IDBDatabase): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORE_NAME], 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const index = store.index('createdAt');
    const request = index.openCursor(null, 'prev');

    let count = 0;
    const idsToDelete: string[] = [];

    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
      if (cursor) {
        count++;
        if (count > MAX_SAVED_RECORDS) {
          idsToDelete.push(cursor.value.id);
        }
        cursor.continue();
      } else {
        if (idsToDelete.length > 0) {
          idsToDelete.forEach((delId) => store.delete(delId));
        }
        resolve();
      }
    };

    request.onerror = () => reject(request.error);
  });
}
