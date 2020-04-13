<template>
    <div id="app">
        <NavBar id="top"/>
        <router-view/>
    </div>
</template>

<script>
  import NavBar from "./components/NavBar";
  import {mapActions} from 'vuex'

  export default {
    name: 'app',
    components: {
      NavBar
    },
    methods: {
      ...mapActions([
        'GET_USER_INFORMATION',
        'GET_ALL_PRODUCTS'
      ])
    },
    mounted() {
      this.GET_ALL_PRODUCTS();
      if (localStorage.getItem('token')) {
        this.GET_USER_INFORMATION();
      }
    }
  }
</script>

<style lang="less">
    @font-face {
        font-family: 'Bowlby';
        src: data-uri("assets/fonts/Bowlby.ttf");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Tahoma';
        src: data-uri("assets/fonts/Tahoma.ttf");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'TahomaBold';
        src: data-uri("assets/fonts/TahomaBold.ttf");
        font-weight: normal;
        font-style: normal;
    }

    .app {
        width: 1920px;
    }
</style>
