<template>
    <div class="login">
        <div v-if="SUCCESS_ERROR.error !== ''" class="login__error">{{ SUCCESS_ERROR.error }}</div>
        <div class="loginInput">
            <input type="email"
                   v-model="email"
                   id="dynamic-label-input"
                   :class="{'isInvalidEmail': $v.email.$error}"
                   placeholder="Enter ur email"
                   @input="$v.email.$touch()"
            >
            <label for="dynamic-label-input">Enter ur email</label>
            <div v-if="isValidEmail">
                <div class="loginInput__error" v-if="!$v.email.required">Email is required</div>
                <div class="loginInput__error" v-if="!$v.email.email">Email is invalid</div>
            </div>
        </div>
        <div class="loginInput">
            <input type="password"
                   v-model="password"
                   id="dynamic-label-input-pass"
                   :class="{'isInvalidEmail': $v.password.$error}"
                   @input="$v.password.$touch()"
                   placeholder="Enter ur password">
            <label for="dynamic-label-input-pass">Enter ur password</label>
            <div v-if="isValidPassword">
                <div v-if="!$v.password.required" class="loginInput__error">Password is required</div>
                <div class="loginInput__error" v-if="!$v.password.minLength">
                    Min length of password is {{$v.password.$params.minLength.min}}. Now it's {{ password.length }}
                </div>
            </div>
        </div>
        <button @click="loginUser" class="login__btn">Login</button>
    </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from 'vuex'
  import {required, email, minLength} from 'vuelidate/lib/validators'

  export default {
    name: 'Login',
    components: {},
    watch: {
      email() {
        this.isValidEmail = true
      },
      password() {
        this.isValidPassword = true;
      }
    },
    validations: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    data() {
      return {
        email: '',
        password: '',
        isValidEmail: false,
        isValidPassword: false
      }
    },
    methods: {
      ...mapActions([
        'CHANGE_LOGIN_STATUS',
        'GET_USER_INFORMATION',
        'LOGIN_USER'
      ]),
      ...mapMutations([
        'MOUNT_SUCCESS_ERROR'
      ]),
      loginUser() {
        const user = {
          email: this.email,
          password: this.password
        };
        this.LOGIN_USER(user);
      }
    },
    computed: {
      ...mapGetters([
        'SUCCESS_ERROR'
      ])
    },
    mounted() {
      this.MOUNT_SUCCESS_ERROR();
    }
  }
</script>

<style lang="less" scoped>
    @keyframes show {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        transition: .4s;
        animation: show .5s 1;
        animation-fill-mode: forwards;
        animation-delay: .2s;

        &__btn {
            width: 600px;
            height: 60px;
            margin-top: 10px;
            background-color: black;
            color: #ffffff;
            font-family: 'Tahoma', serif;
            font-size: 20px;
            outline: none;
        }

        &__error {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 600px;
            height: 40px;
            font-size: 17px;
            /*text-transform: uppercase;*/
            color: rgba(255, 0, 0, .8);
            font-family: 'Tahoma', serif;
            background-color: rgba(255, 0, 0, 0.2);
            border: 2px solid rgba(255, 0, 0, .5);
            border-radius: 5px;
            margin-bottom: 50px;
        }
    }

    .loginInput {
        display: flex;
        flex-direction: column;
        position: relative;
        padding-top: 1.5rem;
        margin-bottom: 50px;

        &__error {
            padding-left: 10px;
            color: red;
            font-size: 20px;
            margin-top: 5px;
        }
    }

    label {
        position: absolute;
        top: 0;
        left: 10px;
        font-size: var(--font-size-small);
        opacity: 1;
        transform: translateY(0);
        transition: all 0.2s ease-out;
        font-family: 'Tahoma', serif;
        color: #404040;
    }

    input:placeholder-shown + label {
        opacity: 0;
        transform: translateY(1rem);
    }

    input {
        width: 600px;
        height: 40px;
        font-family: 'Tahoma', serif;
        font-size: 20px;
        border: none;
        border-bottom: 2px solid gray;
        outline: none;
        padding-left: 10px;
    }

    .isInvalidEmail {
        width: 600px;
        height: 40px;
        font-family: 'Tahoma', serif;
        font-size: 20px;
        border: 2px solid red;
        border-radius: 5px;
        outline: none;
        padding-left: 10px;
    }
</style>