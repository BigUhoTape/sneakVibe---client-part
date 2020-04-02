<template>
    <div class="sliderItem">
        <img :src="productInfo.image" alt="product image" class="sliderItem__image">
        <p class="sliderItem__price">{{productInfo.price}}₽</p>
        <p class="sliderItem__model">{{productInfo.model}}</p>
    </div>
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
        &__image {
            width: 300px;
        }
        &__price {
            font-family: 'TahomaBold', serif;
            font-size: 25px;
        }
        &__model {
            font-family: 'Tahoma', serif;
            font-size: 25px;
            margin-top: 40px;
            text-align: left;
        }
        &:hover {
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            border-radius: 5px;
        }
    }
</style>