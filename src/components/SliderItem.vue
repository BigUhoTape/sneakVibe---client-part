<template>
    <router-link :to="'/product/' + productInfo.id"  class="sliderItem" tag="div">
        <img :src="productInfo.image" alt="product image" class="sliderItem__image">
        <div class="sliderItem-price">
            <p v-if="productInfo.discountPrice.length" class="sliderItem-price__price">{{productInfo.discountPrice}}₽</p>
            <p :class="{'sliderItem-price__sale': productInfo.discountPrice.length}">{{productInfo.price}}₽</p>
        </div>
        <p class="sliderItem__model">{{productInfo.model}}</p>
    </router-link>
</template>

<script>
    export default {
      name: 'SliderItem',
      props: {
        productInfo: {
          type: Object,
          default() {
            return {}
          }
        }
      },
      data() {
        return {}
      }
    }
</script>

<style scoped lang="less">
    .sliderItem {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 25px;
        transition: .3s;
        margin-right: 20px;
        height: 90%;
        &__image {
            width: 95%;
        }
        &__model {
            font-family: 'Tahoma', serif;
            font-size: 25px;
            margin-top: 20px;
            text-align: left;
        }
        &:hover {
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            border-radius: 5px;
        }
        &-price {
            display: flex;
            font-family: 'TahomaBold', serif;
            font-size: 25px;
            &__price {
                margin-right: 15px;
            }
            &__sale {
                font-family: 'Tahoma', serif;
                font-size: 20px;
                text-decoration: line-through;
                color: red;
            }
        }

        &:hover {
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            border-radius: 7px;
            transition: .3s;
            cursor: pointer;
        }
    }
</style>
