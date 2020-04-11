<template>
    <div class="catalogItems">
            <CatalogItem v-for="item in GENDER_PRODUCTS(genderProp)"
                         :key="item._id"
                         :product="item"
            />
    </div>
</template>

<script>
  import CatalogItem from "./CatalogItem";
  import { mapGetters } from 'vuex'
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
      }
    },
    computed: {
      ...mapGetters([
        'GENDER_PRODUCTS'
      ])
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