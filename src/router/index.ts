import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ConsoleView from '../views/ConsoleView.vue';
import Result3DView from '../views/Result3DView.vue';
import SingleInstrumentView from '../views/SingleInstrumentView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Console',
    component: ConsoleView,
  },
  {
    path: '/single-instrument',
    name: 'SingleInstrument',
    component: SingleInstrumentView,
  },
  {
    path: '/debug',
    redirect: '/single-instrument',
  },
  {
    path: '/result/:id',
    name: 'Result3D',
    component: Result3DView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
