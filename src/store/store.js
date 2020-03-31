import Vue from 'vue';

import Vuex from "vuex";

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        funds: 10000,
        times: 0,
        portfolioStock: [],
        article: [
            { id: 1, name: "BMW", price: 110, time: 0 },
            { id: 2, name: "Google", price: 200, time: 0 },
            { id: 3, name: "Apple", price: 250, time: 0 },
            { id: 4, name: "Tiwitter", price: 8, time: 0 },
        ]
    },
    mutations: {
        setTimes: (state, value) => state.times = value,
        buyArticle: (state, times) => state.funds -= times,
    },
    getters: {
        articles: state => state.article,
        funds: state => state.funds,
        portfolioStock: state => state.portfolioStock
    }

})