import axios from 'axios'

export default {
    CHANGE_LOGIN_STATUS({commit}) {
        commit('CHANGE_LOGIN_STATUS');
    },
    CHANGE_LOGIN_STATUS_FALSE({commit}) {
        commit('CHANGE_LOGIN_STATUS_FALSE');
    },
    GET_USER_INFORMATION({commit}) {
        return axios.get('http://localhost:8081/api/user/user', {
            headers: { token: localStorage.getItem('token') }
        }).then(user => {
            commit('SET_USER_INFO_TO_STATE', user.data);
            return user;
        }).catch((error) => {
            console.log(error);
            return error;
        })
    }
}