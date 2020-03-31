import Vue from 'vue';

import Vuex from "vuex";

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        funds: 10000,
        times: 0,
        portfolioStock: [],
        article: [
            { name: "BMW", price: 110 },
            { name: "Google", price: 200 },
            { name: "Apple", price: 250 },
            { name: "Tiwitter", price: 8 },
        ]
    },
    mutations: {
        getTimes: (state, times) => {
            state.times = times;
        },
        buyArticle: (state, times) => {
            return state.funds -= times;
        }
    },
    getters: {
        articles: state => state.article,
        funds: state => state.funds,
        times: state => state.times,
        portfolioStock: state => state.portfolioStock
    }

})