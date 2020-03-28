<template>
    <div class="navigation">
        <nav class="main-nav">
            <div class="main-nav__content">
                <ul class="left-nav">
                    <router-link v-for="item in NavBarLeft"
                                 :key="item.link"
                                 tag="li"
                                 :to="item.link"
                                 class="left-nav__link"
                                 active-class="active"
                    >{{item.title}}</router-link>
                </ul>
                <div class="right-nav">
                    <ul v-if="LOGIN_STATUS">
                        <router-link v-for="item in NavBarRight"
                                     :key="item.link"
                                     :to="item.link"
                                     tag="i"
                                     :class="item.class"
                        ></router-link>
                    </ul>
                    <ul class="right-nav_main">
                        <router-link v-for="item in NavBarRightDesired"
                                     :key="item.link"
                                     :to="item.link"
                                     tag="i"
                                     :class="item.class"
                        ></router-link>
                        <button class="right-nav__exit"
                                v-if="LOGIN_STATUS"
                                @click="profileExit"
                        >Exit</button>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Navbar',
        data: () => ({
            NavBarLeft: [
                { title: 'sneakVibe', link: '/' },
                { title: 'brand', link: '/brand' },
                { title: 'man', link: '/man' },
                { title: 'woman', link: '/woman' },
                { title: 'sale', link: '/discount' }
            ],
            NavBarRight: [
                { class: 'fas fa-star right-nav__icon', link: '/chosenProducts' },
                { class: 'fas fa-shopping-basket right-nav__icon', link: '/cart' },
            ],
            NavBarRightDesired: [
                { class: 'fas fa-search right-nav__icon', link: '/search' },
                { class: 'fas fa-user right-nav__icon', link: '/profile' },
            ]
        }),
        methods: {
          ...mapActions([
              'CHANGE_LOGIN_STATUS',
              'CHANGE_LOGIN_STATUS_FALSE'
          ]),
          profileExit() {
              this.CHANGE_LOGIN_STATUS_FALSE();
              localStorage.removeItem('token');
              this.$router.push('/');
          }
        },
        computed: {
            ...mapGetters([
                'LOGIN_STATUS'
            ]),
        },
        mounted() {
            if (localStorage.getItem('token')) {
                this.CHANGE_LOGIN_STATUS();
            }
        }
    }
</script>

<style lang="less" scoped>
    .active {
        color: #000000 !important;
    }
    .main-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 110px;
        background-color: #fff;
        position: fixed;
        z-index: 99;
        &__content {
            width: 1720px;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
        }
    }
    .left-nav {
        display: flex;
        align-items: center;
        list-style: none;
        padding-left: 0px;
        &__link {
            font-family: 'Tahoma',serif;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 20px;
            color: #A8A8A8;
            margin-right: 46px;
            transition: 0.5s;
            cursor: pointer;
            &:first-child {
                text-transform: none;
                font-size: 40px;
                font-family: 'Bowlby', serif;
                color: #000;
                margin-right: 127px;
            }
            &:hover{
                color: #000000;
                transition: 0.5s;
            }
        }
    }
    .right-nav {
        display: flex;
        align-items: center;
        &_main{
          display: flex;
        }
        &__exit {
            margin-left: 70px;
            border: none;
            padding: 0;
            color: red;
            font-size: 20px;
        }
        &__icon {
            color: #A8A8A8;
            font-size: 23px;
            margin-left: 70px;
            transition: .4s;
            &:hover {
                color: #000000;
                transition: .4s;
            }
        }
    }
</style>