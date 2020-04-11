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
  },
  GENDER_PRODUCTS: (state) => gender => {
    if (gender === '') {
      const products = state.products.products.map(product => {
        return {
          id: product._id,
          image: product.images[0],
          model: product.model.replace('Арт.', ''),
          price: product.price,
          discountPrice: product.discountPrice
        }
      });
      return products;
    }
    if (gender === 'sale') {
      let maleProducts = state.products.products.filter(product => product.discountPrice);
      maleProducts = maleProducts.map(product => {
        return {
          id: product._id,
          image: product.images[0],
          model: product.model.replace('Арт.', ''),
          price: product.price,
          discountPrice: product.discountPrice
        }
      });
      return maleProducts;
    }
    let maleProducts = state.products.products.filter(product => product.gender === gender);
    maleProducts = maleProducts.map(product => {
      return {
        id: product._id,
        image: product.images[0],
        model: product.model.replace('Арт.', ''),
        price: product.price,
        discountPrice: product.discountPrice
      }
    });
    return maleProducts;
  }
}