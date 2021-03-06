
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import schNavbar from './components/schNavbar.vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
});
Vue.use(VueRouter);

window.Vue = require('vue');


const router = new VueRouter({

    routes :  [
        {
            path : '/quiz',
            name : 'Quiz',
            component : require('./quiz/index.vue'),
        },
    ]
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


 const app = new Vue({
     router,
     components: {
         schNavbar: schNavbar,
     }
 }).$mount('#app');
