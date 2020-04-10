<template>
    <div class="womanView">
        <CatalogMainWrapper genderProp="female"/>
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
    .womanView {
        display: flex;
        justify-content: center;
        padding-top: 170px;
    }
</style>