import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Objects from '../views/Objects.vue';
import PersAccs from '../views/PersAccs.vue';
import Documents from '../views/Documents.vue';
import Requests from '../views/Requests.vue';
import Votes from '../views/Votes.vue';
import Appeal from '../views/Appeal.vue';
import Service from '../views/Service.vue';

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/objects',
    component: Objects,
  },
  {
    path: '/accaunt/list',
    component: PersAccs,
  },
  {
    path: '/documents',
    component: Documents,
  },
  {
    path: '/requests',
    component: Requests,
  },
  {
    path: '/votes',
    component: Votes,
  },
  {
    path: '/appeal',
    component: Appeal,
  },
  {
    path: '/service',
    component: Service,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
