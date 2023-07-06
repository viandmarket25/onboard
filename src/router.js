import { createRouter, createWebHistory } from 'vue-router';
import ChatView from './views/chat.vue'; // Replace with your actual component
import MarketingView from './views/marketing.vue'
const routes = [
  {
    path: '/chat',
    name: 'ChatView',
    component: ChatView,
  },
  {
    path: '/',
    name: 'MarketingView',
    component: MarketingView,
  },
  // Add your routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
