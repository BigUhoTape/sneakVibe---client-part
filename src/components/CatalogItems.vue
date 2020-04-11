<template>
    <div class="catalogItems">
            <CatalogItem v-for="item in filteredProducts"
                         :key="item._id"
                         :product="item"
            />
    </div>
</template>

<script>
  import CatalogItem from "./CatalogItem";
  export default {
    name: 'CatalogItems',
    components: {
      CatalogItem
    },
    props: {
      genderProp: {
        type: String,
        default() {
          return '';
        }
      },
      searchValue: {
        type: String,
        default() {
          return ''
        }
      }
    },
    computed: {
      filteredProducts() {
        let products = this.$store.getters.GENDER_PRODUCTS(this.genderProp);
        if (this.searchValue) {
          return products.filter(product => {
            return product.model.toLowerCase().includes(this.searchValue.toLowerCase());
          })
        }
        return products
      }
    },
  }
</script>

<style scoped lang="less">
    .catalogItems {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 1420px;
        padding-left: 105px;
    }
</style>