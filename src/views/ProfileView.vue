<template>
    <div class="profileView">
        <div v-if="LOGIN_STATUS" class="profileMain">
            <RadioComponent :propRadio="profileRadio" @changeRadio="changeProfileRadio"/>
            <div v-if="generalInfo === 'My Profile'" class="GeneralUserInfo">
                <GeneralUserInfo/>
            </div>
            <div v-else>
                <AdditionalUserInfo/>
            </div>
        </div>
        <div v-else class="loginComponent">
            <RadioComponent :propRadio="loginRadio" @changeRadio="changeIsSignUp"/>
            <div v-if="isSignIn === 'Sign up'" class="signIpForm">
                <Signup :isSignIn="isSignIn" @changeIsSignUp="changeIsSignUp"/>
            </div>
            <div v-else class="logInForm">
                <Login/>
            </div>
        </div>
    </div>
</template>

<script>
  import Signup from "../components/Signup";
  import Login from "../components/Login";
  import GeneralUserInfo from "../components/generalUserInfo";
  import AdditionalUserInfo from "../components/additionalUserInfo";
  import RadioComponent from "../components/RadioComponent";
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        isSignIn: 'Sign up',
        generalInfo: 'My Profile',
        loginRadio: {
          value1: 'Sign up',
          value2: 'Log in'
        },
        profileRadio: {
          value1: 'My Profile',
          value2: 'My Address'
        }
      }
    },
    components: {
      Signup,
      Login,
      GeneralUserInfo,
      AdditionalUserInfo,
      RadioComponent
    },
    methods: {
      changeIsSignUp(value) {
        this.isSignIn = value;
      },
      changeProfileRadio(value) {
        this.generalInfo = value;
      }
    },
    computed: {
      ...mapGetters([
        'LOGIN_STATUS',
      ]),
    },
    mounted() {
    },
  }
</script>

<style lang="less" scoped>
    .profileMain {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .loginComponent {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
    }
</style>