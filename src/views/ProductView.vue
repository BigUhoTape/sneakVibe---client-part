<template>
    <div class="productView">{{product.model}}</div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
      name: 'ProductView',
      data() {
        return {
          id: this.$route.params.id,
          product: {}
        }
      },
      watch: {
        PRODUCT_STATUS() {
          this.product = this.PRODUCT_BY_ID(this.id);
        }
      },
      computed: {
        ...mapGetters([
          'PRODUCT_BY_ID',
          'PRODUCT_STATUS'
        ])
      },
      mounted() {
        if (this.PRODUCT_STATUS) {
          this.product = this.PRODUCT_BY_ID(this.id);
        }
      }
    }
</script>

<style lang="less" scoped>
    .productView {
        padding-top: 170px;
    }
</style>
