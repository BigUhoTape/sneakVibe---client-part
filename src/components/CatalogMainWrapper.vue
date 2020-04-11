<template>
    <div class="catalogMainWrapper">
        <div class="catalogMainWrapper-title">
            <h2 v-if="title === 'Man'" class="catalogMainWrapper-title__title">Man</h2>
            <h2 v-if="title === 'Woman'" class="catalogMainWrapper-title__title">Woman</h2>
            <h2 v-if="title === 'Sale'" class="catalogMainWrapper-title__title-red">Sale</h2>
            <div class="catalogMainWrapper-search">
                <i class="fas fa-search catalogMainWrapper-search__icon"></i>
                <input type="text" v-model="searchValue" class="catalogMainWrapper-search__input">
                <i class="fas fa-times-circle catalogMainWrapper-search__exit" @click="clearSearchValue"></i>
            </div>
        </div>
        <div class="catalogMainWrapper-main">
            <div class="filter"></div>
            <CatalogItems :genderProp='genderProp'/>
        </div>
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
      },
      title: {
        type: String,
        default() {
          return '';
        }
      }
    },
    data() {
      return {
        searchValue: ''
      }
    },
    methods: {
      clearSearchValue() {
        this.searchValue = '';
      }
    }
  }
</script>

<style scoped lang="less">
    .catalogMainWrapper {
        display: flex;
        flex-direction: column;
        width: 1720px;

        &-search {
            width: 1335px;
            position: relative;

            &__input {
                width: 1215px;
                height: 50px;
                padding-left: 50px;
                padding-right: 50px;
                font-family: 'Tahoma', serif;
                font-size: 28px;
                border: 2px solid #A8A8A8;
                color: #A8A8A8;
                &:focus {
                    border: 2px solid #000000;
                    color: #000;
                    outline: none;
                }
            }

            &__icon {
                font-size: 25px;
                position: absolute;
                top: 38%;
                left: 13px;
            }

            &__exit {
                font-size: 25px;
                position: absolute;
                top: 35%;
                right: 29px;
                cursor: pointer;
                transition: .3s;
                &:hover {
                    color: #FF6347;
                    transition: .3s;
                }
            }
        }

        &-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Tahoma', serif;
            font-size: 50px;
            margin-bottom: 60px;

            &__title {
                padding-left: 20px;

                &-red {
                    color: 	#FF6347;
                    padding-left: 20px;
                }
            }
        }

        &-main {
            display: flex;
        }
    }

    .filter {
        width: 300px;
        height: 500px;
        background-color: #000;
    }
</style>