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
      headers: {token: localStorage.getItem('token')}
    }).then(user => {
      commit('SET_USER_INFO_TO_STATE', user.data);
      return user;
    }).catch((error) => {
      console.log(error);
      return error;
    })
  },
  UPDATE_USER_ADDRESS({commit}, userData) {
      return axios({
        url: 'http://localhost:8081/api/user/edit',
        method: 'put',
        headers: { token: localStorage.getItem('token') },
        data: {
          name: userData.name,
          surname: userData.surname,
          gender: userData.gender,
          country: userData.country,
          city: userData.city,
          address: userData.address,
          phonenumber: userData.phonenumber,
          cityIndex: userData.cityIndex
        }
      }).then(res => {
        commit('SET_SUCCESS', res.data.title);
      }).catch(err => {
        commit('SET_ERROR', err.response.data.title);
      })
  }
}