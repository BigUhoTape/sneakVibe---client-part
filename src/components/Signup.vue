<template>
    <div class="signup">
        <div class="signupForm">
            <div class="signupInput">
                <input type="email"
                       v-model="email"
                       id="dynamic-label-input"
                       :class="{'isInvalid': $v.email.$error}"
                       @input="$v.email.$touch()"
                       placeholder="Enter ur email"/>
                <label for="dynamic-label-input" class="labelText">Enter ur email</label>
                <div v-if="isValidEmail">
                    <div class="signupInput__error" v-if="!$v.email.required">Email is required</div>
                    <div class="signupInput__error" v-if="!$v.email.email">Invalid email</div>
                    <div class="signupInput__error" v-if="error">{{error}}</div>
                </div>
            </div>
            <div class="signupInput">
                <input type="text"
                       v-model="name"
                       :class="{'isInvalid': $v.name.$error}"
                       @input="$v.name.$touch()"
                       id="dynamic-label-input-name"
                       placeholder="Enter ur name"/>
                <label for="dynamic-label-input-name" class="labelText">Enter ur name</label>
                <div v-if="isValidName">
                    <div class="signupInput__error" v-if="!$v.name.required">Name is required</div>
                </div>
            </div>
            <div class="signupInput">
                <input type="text"
                       v-model="surname"
                       :class="{'isInvalid': $v.surname.$error}"
                       @input="$v.surname.$touch()"
                       id="dynamic-label-input-surname"
                       placeholder="Enter ur surname"/>
                <label for="dynamic-label-input-surname" class="labelText">Enter ur surname</label>
                <div v-if="isValidSurname">
                    <div class="signupInput__error" v-if="!$v.surname.required">Surname is required</div>
                </div>
            </div>
            <div class="signupInput">
                <input type="password"
                       v-model="password"
                       :class="{'isInvalid': $v.password.$error}"
                       @input="$v.password.$touch()"
                       id="dynamic-label-input-password"
                       placeholder="Enter ur password"/>
                <label for="dynamic-label-input-password" class="labelText">Enter ur password</label>
                <div v-if="isValidPassword">
                    <div class="signupInput__error" v-if="!$v.password.required">Surname is required</div>
                    <div class="signupInput__error" v-if="!$v.password.minLength">
                        Min length of password is {{$v.password.$params.minLength.min}}. Now it's {{ password.length }}
                    </div>
                </div>
            </div>
            <div class="signupRadio">
                <div class="signupRadio-item" @click="gender = 'male'">
                    <input type="radio" v-model="gender" id="gender1" value="male" class="signupRadio-item__radio">
                    <label for="gender1" class="signupRadio-item__label">Male</label>
                </div>
                <div class="signupRadio-item" @click="gender = 'female'">
                    <input type="radio" v-model="gender" id="gender2" value="female" class="signupRadio-item__radio">
                    <label for="gender2" class="signupRadio-item__label">Female</label>
                </div>
            </div>
            <button :disabled="$v.$invalid"
                    :class="{'signupForm__btn-disabled': $v.$invalid}"
                    @click="signup()"
                    class="signupForm__btn">Sign up</button>
        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {required, email, minLength} from 'vuelidate/lib/validators'

  export default {
    name: 'Signup',
    components: {},
    props: {
      isSignIn: {
        type: String,
        default() {
          return true;
        }
      }
    },
    validations: {
      email: {
        required,
        email
      },
      name: {
        required
      },
      surname: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      },
      gender: {
        required
      }
    },
    watch: {
      email() {
        this.isValidEmail = true;
        this.error = '';
      },
      name() {
        this.isValidName = true;
      },
      surname() {
        this.isValidSurname = true;
      },
      password() {
        this.isValidPassword = true;
      }
    },
    data() {
      return {
        name: '',
        email: '',
        surname: '',
        password: '',
        gender: '',
        error: '',
        isSignUp: this.isSignIn,
        isValidEmail: false,
        isValidName: false,
        isValidSurname: false,
        isValidPassword: false,
      }
    },
    methods: {
      ...mapActions([
        'SIGNUP_USER'
      ]),
      signup() {
        const userData = {
          name: this.name,
          email: this.email,
          surname: this.surname,
          password: this.password,
          gender: this.gender,
        };
        this.SIGNUP_USER(userData)
          .then(() => {
            this.isSignUp = 'Log in';
            this.$emit('changeIsSignUp', this.isSignUp);
          }).catch(err => {
            this.error = err.response.data.error;
          });
      },
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

    .signup {
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        transition: .4s;
        animation: show .5s 1;
        animation-fill-mode: forwards;
        animation-delay: .2s;

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

    .signupForm {
        display: flex;
        width: 1200px;
        flex-wrap: wrap;
        justify-content: space-between;

        &__btn {
            width: 550px;
            height: 60px;
            color: #ffffff;
            font-family: 'Tahoma', serif;
            font-size: 20px;
            outline: none;
            background-color: black;
            margin-top: 50px;
            &-disabled {
                background-color: rgba(#000, .6);
            }
        }
    }

    .signupInput {
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

    .labelText {
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

    input:placeholder-shown + .labelText {
        opacity: 0;
        transform: translateY(1rem);
    }

    input[type="text"], input[type="password"], input[type="email"] {
        width: 550px;
        height: 40px;
        font-family: 'Tahoma', serif;
        font-size: 20px;
        border: none;
        border-bottom: 2px solid gray;
        outline: none;
        padding-left: 10px;
    }

    .signupRadio {
        display: flex;
        justify-content: space-between;
        width: 550px;
        margin-top: 50px;

        &-item {
            &__radio {
                display: none;
            }

            &__label {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 260px;
                height: 60px;
                border: 1px solid #404040;
                cursor: pointer;
                transition: .3s;
                font-size: 20px;
                font-family: 'Tahoma', serif;
                letter-spacing: 1.2px;
            }

            &:hover {
                background-color: black;
                color: #ffffff;
                transition: .3s;
            }

            &__radio:checked + &__label {
                background-color: black;
                color: #ffffff;
            }
        }
    }
    .isInvalid {
        border: 2px solid red !important;
        border-radius: 5px;
    }
</style>