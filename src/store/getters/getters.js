export default {
  LOGIN_STATUS(state) {
    return state.isUserLogined;
  },
  USER_INFO(state) {
    return state.userInfo.user;
  },
  SUCCESS_ERROR(state) {
    return {
      success: state.success,
      error: state.error
    }
  }
}