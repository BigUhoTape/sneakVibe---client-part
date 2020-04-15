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
  SET_SUCCESS(state, title) {
    state.error = '';
    state.success = title;
  },
  SET_ERROR(state, title) {
    state.success = '';
    state.error = title;
  },
  MOUNT_SUCCESS_ERROR(state) {
    state.success = '';
    state.error = ''
  },
  SET_ALL_PRODUCTS_TO_STATE(state, products) {
    products.products =  products.products.map(product => {
      return {
        images: product.images,
        _id: product._id,
        article: product.article,
        color: product.color,
        description: product.description,
        discountPrice: product.discountPrice,
        gender: product.gender,
        price: product.price,
        model: product.model.replace('Арт.', '').replace('Кроссовки ', '').replace('Подростковые кроссовки', '')
      }
    });
    state.products = products;
  }
}