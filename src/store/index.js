import Vue from 'vue'
import Vuex from 'vuex'

import actions from "./actions/actions";
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isUserLogined: false,
        userInfo: {
            user: {
                name: '',
                email: '',
                surname: '',
                password: '',
                gender: '',
                _id: '',
                country: '',
                city: '',
                address: '',
                phonenumber: '',
                cityIndex: '',
                cart: { items: [] },
                liked: { items: [] }
            }
        }
    },
    mutations,
    actions,
    getters
})
