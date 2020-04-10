<template>
    <div class="catalogItem">
        <img :src="product.image"
             alt="Product image"
             class="catalogItem__img"
        >
        <div class="catalogItem-price">
            <p v-if="product.discountPrice.length" class="catalogItem-price__price">{{product.discountPrice}}</p>
            <p :class="{'catalogItem-price__sale': product.discountPrice.length}">{{ product.price }}</p>
        </div>
        <p class="catalogItem__name">{{product.model}}</p>
    </div>
</template>

<script>
    export default {
      name: 'CatalogItem',
      props: {
        product: {
          type: Object,
          default() {
            return {}
          }
        }
      }
    }
</script>

<style scoped lang="less">
    .catalogItem {
        padding: 25px;
        transition: .3s;
        width: 300px;
        margin-bottom: 50px;

        &__img {
            width: 300px;
        }

        &__name {
            font-family: 'Tahoma', serif;
            font-size: 23px;
            margin-top: 15px;
            width: 300px;
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