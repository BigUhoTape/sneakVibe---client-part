export default {
    CHANGE_LOGIN_STATUS(state) {
        state.isUserLogined = true;
    },
    CHANGE_LOGIN_STATUS_FALSE(state) {
        state.isUserLogined = false;
        state.userInfo.user = {};
    },
    SET_USER_INFO_TO_STATE(state, user) {
        state.userInfo = user;
    },
}