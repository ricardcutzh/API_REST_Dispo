/*
 **********************************************
 * TODOS LOS IMPORT
 **********************************************
 */
import Vue from 'vue';
/*
------------------------------------
Framework 7
------------------------------------
*/

import Framework7Vue from 'framework7-vue-2.2.5/dist/framework7-vue.esm.bundle.js'
//import Framework7Vue from 'framework7-vue-2.2.5'
import Framework7 from 'framework7-vue-2.2.5/node_modules/framework7/dist/framework7.esm.bundle.js'

import CssVuetify from 'framework7-vue-2.2.5/node_modules/framework7/dist/css/framework7.css'; 


Vue.use(Framework7Vue, Framework7);

//import { f7List, f7ListItem, f7Navbar } from 'framework7-vue-2.2.5';
/*
------------------------------------
Para las rutas de vue
------------------------------------
*/
import VueRouter from 'vue-router';
Vue.use(VueRouter);


/*
------------------------------------
Para los request
------------------------------------
*/
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
/*
------------------------------------
Para imprimir en consola
------------------------------------
*/
const options = {
    logLevel: 'debug',
    stringifyArguments: false,
    showLogLevel: false
}

import VueLogger from 'vuejs-logger'
Vue.use(VueLogger, options)
/*
 **********************************************
 * LAS VISTAS
 **********************************************
 */
import master from './home/master2.vue'

/*
 **********************************************
 * LAS RUTAS
 **********************************************
 */
const routes = [{
    name: 'master',
    path: '/',
    component: master
}];


/*
 **********************************************
 * APP
 **********************************************
 */
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue(Vue.util.extend({
    router
}, master)).$mount('#app');

var app = new Framework7({
        root: '#app',
        theme: 'ios',
    },
    Vue.util.extend({
            router
        },
        master));


/* new Vue({
    el: '#app',
    framework7: {
      routes: routes
    },
    // ...
  }).$mount('#app'); */