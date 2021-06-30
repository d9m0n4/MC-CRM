import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import PersAccs from '../views/PersAccs.vue';
import Documents from '../views/Documents.vue';
import Requests from '../views/Requests.vue';
import Votes from '../views/Votes.vue';
import Appeal from '../views/Appeal.vue';
import Service from '../views/Service.vue';

import store from '../store/index';

const routes = [
  {
    path: '/auth',
    component: Login,
    meta: {
      layout: 'auth',
    },
  },
  {
    path: '/',
    component: Home,
    name: 'Главная',
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/objects',
    component: () => import('../views/Objects.vue'),
    name: 'Объекты',
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/objects/object:id',
    component: () => import('../views/ObjectItem.vue'),
    name: 'object',
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/accaunt/list',
    component: PersAccs,
    name: 'Лицевые счета',
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/documents',
    component: Documents,
    name: 'Документы',
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/requests',
    component: Requests,
    name: 'Заявки',
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/votes',
    component: Votes,
    name: 'Голосования',
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/appeal',
    component: Appeal,
    name: 'Обращения',
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/service',
    component: Service,
    name: 'Сервис',
    meta: {
      layout: 'main',
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;
  if (requireAuth && store.getters['auth/isAuth']) {
    next();
  } else if (requireAuth && !store.getters['auth/isAuth']) {
    next('/auth?message=auth');
  } else {
    next();
  }
});

export default router;
