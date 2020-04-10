<template>
    <div class="catalogMainWrapper">
        <div class="filter"></div>
        <CatalogItems :genderProp='genderProp'/>
    </div>
</template>

<script>
  import CatalogItems from "./CatalogItems";

  export default {
    name: 'CatalogMainWrapper',
    components: {
      CatalogItems
    },
    props: {
      genderProp: {
        type: String,
        default() {
          return '';
        }
      }
    }
  }
</script>

<style scoped lang="less">
    .catalogMainWrapper {
        display: flex;
        width: 1720px;
    }

    .filter {
        width: 300px;
        height: 500px;
        background-color: #000;
    }
</style>