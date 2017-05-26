import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import About from './components/About';
import Projects from './components/Projects';
import Journal from './components/Journal';
import JournalEntry from './components/JournalEntry';

Vue.use(VueRouter);

const routes = [
  { path: '/',
    component: App,
    children: [
      { path: '', redirect: '/about' },
      { path: '/about', component: About },
      { path: '/projects', component: Projects },
      { path: '/journal', component: Journal },
      { path: '/journal/:entryUrl', component: JournalEntry },
    ],
  },
  // Any unmatched route redirects to About
  { path: '*', redirect: '/about' },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');
