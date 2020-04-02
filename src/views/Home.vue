<template>
    <div class="home">
        <div class="home-header">
            <div class="container">
                <div class="header-desc">
                    <p class="header-desc__brand">nike</p>
                    <p class="header-desc__model">air max 95</p>
                    <p class="header-desc__price">9 990<span class="header-desc__price_ruble">₽</span></p>
                    <button class="header-desc__buyBtn">Купить</button>
                </div>
            </div>
        </div>
        <div class="container man-woman">
            <router-link to="/man" class="man-woman-item">
                <img src="../assets/images/homePage/forMan.png" alt="" class="man-woman-item__img">
                <p class="man-woman-item__name">Мужчинам</p>
            </router-link>
            <router-link to="/woman" class="man-woman-item">
                <img src="../assets/images/homePage/forWoman.png" alt="" class="man-woman-item__img">
                <p class="man-woman-item__name man-woman-item__name_woman">Женщинам</p>
            </router-link>
        </div>
        <div class="container homeSlider">
            <RadioComponent @changeRadio="radioValue" :propRadio="propRadio"/>
            <div v-if="slider === 'New'" class="container">
                <Slider :products="SLIDER_NEW_PRODUCTS"/>
            </div>
            <div v-else-if="slider === 'Sale'" class="container">
                <Slider :products="SLIDER_SALE_PRODUCTS"/>
            </div>
        </div>
    </div>
</template>

<script>
  import RadioComponent from "../components/RadioComponent";
  import Slider from "../components/Slider";
  import {mapGetters} from 'vuex'

  export default {
    name: 'Home',
    components: {
      RadioComponent,
      Slider
    },
    data() {
      return {
        propRadio: {
          value1: 'New',
          value2: 'Sale'
        },
        slider: 'New'
      }
    },
    methods: {
      radioValue(value) {
        this.slider = value;
      }
    },
    computed: {
      ...mapGetters([
        'SLIDER_NEW_PRODUCTS',
        'SLIDER_SALE_PRODUCTS'
      ])
    }
  }
</script>

<style lang="less" scoped>
    .home {
        font-family: 'Tahoma', serif;
    }

    .container {
        max-width: 1720px;
        margin: 0 auto;
        width: 100%;
    }

    .home-header {
        background: url("../assets/images/homePage/nikeAirMax.png") no-repeat center center;
        height: 100vh;
        min-height: 750px;
    }

    .header-desc {
        text-align: right;
        margin-right: 100px;
        padding-top: 150px;

        &__brand {
            color: #D2D2D2;
            font-size: 80px;
            text-transform: uppercase;
        }

        &__model {
            color: #D2D2D2;
            font-size: 57px;
            text-transform: uppercase;
            margin-top: 35px;
            margin-bottom: 30px;
        }

        &__price {
            color: #ffffff;
            font-size: 72px;
            margin-bottom: 30px;

            &_ruble {
                font-size: 40px;
            }
        }

        &__buyBtn {
            border-radius: 5px;
            width: 177px;
            height: 52px;
            background-color: #D2D2D2;
            color: #4e4e4e;
            font-size: 25px;
            transition: 0.3s;
            border: none;

            &:hover {
                cursor: pointer;
                transition: 0.3s;
                color: #ffffff;
                background-color: #000000;
            }
        }
    }

    .man-woman {
        display: flex;
    }

    .man-woman-item {
        overflow: hidden;
        position: relative;

        &__img {
            display: block;
            transition: .3s;

            &:hover {
                transform: scale(1.1);
            }
        }

        &__name {
            position: absolute;
            bottom: 100px;
            left: 35px;
            color: #ffffff;
            font-size: 40px;

            &_woman {
                left: 620px;
            }
        }
    }

    .homeSlider {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 110px;
        margin-bottom: 100px;
    }
</style>