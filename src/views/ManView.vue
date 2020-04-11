<template>
    <div class="manView">
        <CatalogMainWrapper genderProp="male" title="Man"/>
    </div>
</template>

<script>
    import CatalogMainWrapper from "../components/CatalogMainWrapper";
    export default {
      name: 'ManView',
      components: {
        CatalogMainWrapper
      },
      data() {
        return {

        }
      }
    }
</script>

<style scoped lang="less">
    .manView {
        display: flex;
        justify-content: center;
        padding-top: 170px;
    }
</style>