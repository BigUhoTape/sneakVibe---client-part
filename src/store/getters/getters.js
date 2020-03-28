export default {
    LOGIN_STATUS(state) {
        return state.isUserLogined;
    },
    USER_INFO(state) {
        return state.userInfo.user;
    }
}