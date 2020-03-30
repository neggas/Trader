import Vue from 'vue';

import Vuex from "vuex";

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        funds: 10000,
        article: [
            { name: "BMW", price: 110 },
            { name: "Google", price: 200 },
            { name: "Apple", price: 250 },
            { name: "Tiwitter", price: 8 },
        ]
    },
    getters: {
        articles: state => state.article,
        funds: state => state.funds
    }

})