import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import { routes } from './router';
import { store } from './store/store'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
})



Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')