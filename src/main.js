// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import Router from 'vue-router';
import axios from 'axios';

import App from './App';
import iCnews from './components/iCnews';
import iCquestions from './components/iCquestions';

Vue.use(Router);
Vue.use(ElementUI);
Vue.use(axios);

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/news', component: iCnews,
  }, {
    path: '/jobs', component: iCnews,
  }, {
    path: '/questions', component: iCquestions,
  }],

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
