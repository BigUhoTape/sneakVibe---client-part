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
  },
  SLIDER_NEW_PRODUCTS(state) {
    let products = state.products.products.slice(-12);
    products = products.map(item => {
      return {
        id: item._id,
        image: item.images[0],
        model: item.model.replace('Арт.', ''),
        price: item.price,
        discountPrice: item.discountPrice
      }
    });
    return products;
  },
  SLIDER_SALE_PRODUCTS(state) {
    let saleProducts = state.products.products.filter(product => product.discountPrice);
    saleProducts = saleProducts.map(item => {
      return {
        id: item._id,
        image: item.images[0],
        model: item.model.replace('Арт.', ''),
        price: item.price,
        discountPrice: item.discountPrice
      }
    });
    saleProducts = saleProducts.slice(-12);
    return saleProducts;
  }
}