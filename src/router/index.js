import Vue from 'vue';
import Router from 'vue-router';
import { requireAuth, requireAnon } from '@/utils/auth';
import App from '@/components/App';

import Trackings from '@/components/Trackings';
import Processes from '@/components/Processes';
import Tasks from '@/components/Tasks';
import Task from '@/components/Task';

import SignIn from '@/components/SignIn';
import '@/components';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      beforeEnter: requireAuth,
      component: App,
      children: [
        {
          name: 'trackings',
          path: 'tracking',
          component: Trackings,
        },
        {
          name: 'tracking',
          path: 'tracking/:id',
          component: Trackings,
        },
        {
          name: 'Tasks',
          path: 'tasks',
          component: Tasks,
        },
        {
          name: 'Task',
          path: 'task/:id',
          component: Task,
        },
        {
          name: 'processes',
          path: '',
          component: Processes,
        },
        {
          name: 'process',
          path: 'process/:id',
          component: Processes,
        },
      ],
    },
    {
      path: '/signin',
      beforeEnter: requireAnon,
      component: SignIn,
    },
  ],
});
