<template>
    <div class="catalogItems">
        <div class="catalogItems__items">
            <CatalogItem v-for="item in pageOfItems"
                         :key="item._id"
                         :product="item"
            />
        </div>
        <div>
            <JwPagination :pageSize="12" :items="filteredData" @changePage="onChangePage"/>
        </div>
    </div>
</template>

<script>
  import CatalogItem from "./CatalogItem";
  import JwPagination from 'jw-vue-pagination'

  export default {
    name: 'CatalogItems',
    components: {
      CatalogItem,
      JwPagination
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
      },
    },
    data() {
      return {
        pageOfItems: []
      }
    },
    methods: {
      onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems
      }
    },
    computed: {
      filteredData() {
        let products = this.$store.getters.GENDER_PRODUCTS(this.genderProp);
        if (this.searchValue) {
          products = products.filter(product => {
            return product.model.toLowerCase().includes(this.searchValue.toLowerCase());
          });
          return products;
        }
        return products;
      }
    },
  }
</script>

<style scoped lang="less">
    .catalogItems {
        display: flex;
        flex-direction: column;
        width: 1420px;
        padding-left: 105px;

        &__items {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>