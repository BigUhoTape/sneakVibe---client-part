<template>
    <div class="searchView">
        <CatalogMainWrapper title="Search" :isSearching="true"/>
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
    .searchView {
        display: flex;
        justify-content: center;
        padding-top: 170px;
    }
</style>