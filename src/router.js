import { createRouter, createWebHistory } from 'vue-router';
import PendingView from './views/pending.vue'; // Replace with your actual component
import MarketingView from './views/marketing.vue'
import JoinView from './views/join.vue'
import PrivacyView from './views/privacy.vue'
import WaitlistView from './views/waitlist.vue'


const routes = [
  {
    path: '/waitlist',
    name: 'WaitlistView',
    component: WaitlistView,
  },
  {
    path: '/privacy',
    name: 'PrivacyView',
    component: PrivacyView,
  },
  {
    path: '/',
    name: 'MarketingView',
    component: MarketingView,
  },
  {
    path: '/join',
    name: 'JoinView',
    component: JoinView,
  },
  {
    path: '/pending',
    name: 'PendingView',
    component: PendingView,
  },
  // Add your routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
