<template>
    <div class="discountView">
        <CatalogMainWrapper genderProp="sale" title="Sale"/>
    </div>
</template>

<script>
    import CatalogMainWrapper from "../components/CatalogMainWrapper";
    export default {
      components: {
        CatalogMainWrapper
      }
    }
</script>

<style scoped lang="less">
    .discountView {
        display: flex;
        justify-content: center;
        padding-top: 170px;
    }
</style>