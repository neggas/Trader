import Vue from 'vue';

import Vuex from "vuex";

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        funds: 10000,
        article: [
            { name: "BMW", pricce: 110 },
            { name: "Google", pricce: 200 },
            { name: "Apple", pricce: 250 },
            { name: "Tiwitter", pricce: 8 },
        ]
    },

})