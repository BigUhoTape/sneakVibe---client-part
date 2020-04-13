<template>
    <div class="catalogItems">
        <div class="catalogItems__items">
            <CatalogItem v-for="item in itemsOnPage"
                         :key="item._id"
                         :product="item"
            />
        </div>
        <Paginate v-model="page"
                  :page-count="pageCount"
                  :click-handler="changePagePagination"
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  :container-class="'pagination'"
                  :page-class="'page'"
                  :page-link-class="'page-link'"
                  :prev-class="'page'"
                  :prev-link-class="'page-link opt'"
                  :next-class="'page'"
                  :next-link-class="'page-link opt'"
                  :active-class="'activeClass'"
                  v-scroll-to="'#top'"
        />
    </div>
</template>

<script>
  import CatalogItem from "./CatalogItem";
  import Paginate from 'vuejs-paginate'
  import paginationMixin from './../mixins/pagination.mixin'

  export default {
    name: 'CatalogItems',
    components: {
      CatalogItem,
      Paginate
    },
    mixins: [paginationMixin],
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
      return {}
    },
    watch: {
      filteredData() {
        this.setupPagination(this.filteredData);
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
    mounted() {
      this.setupPagination(this.filteredData);
    }
  }
</script>

<style lang="less">
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

    .pagination {
        display: flex;
        justify-content: center;
        width: 0;
        margin: 0 auto;
        margin-top: 30px;
    }
    .page {
        margin-right: 5px;
    }
    .page-link {
        display: inline;
        font-family: 'Tahoma', serif;
        padding: 20px;
        border: 1px solid #000;
        border-radius: 5px;
        font-size: 20px;
        transition: .4s;
        &:focus {
            outline: none;
        }
        &:hover {
            background-color: #000000;
            color: #D2D2D2;
            transition: .4s;
        }
    }
    .opt {
        background-color: #343434;
        color: #D2D2D2;
    }
</style>