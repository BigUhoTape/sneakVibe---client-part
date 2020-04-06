<template>
    <div class="generalUserInfo">
        <div v-if="SUCCESS_ERROR.success !== ''" class="generalUserInfo__success">{{SUCCESS_ERROR.success}}</div>
        <div class="generalUserInfo-main">
            <div class="generalUserInfo__item">
                <input type="text"
                       v-model="USER_INFO.name"
                       :class="{'isInvalid': $v.USER_INFO.name.$error}"
                       @input="$v.USER_INFO.name.$touch()"
                       class="generalUserInfo-main__input"
                       placeholder="Enter ur name">
                <div class="userInfo__error" v-if="!$v.USER_INFO.name.required">Name is required</div>
            </div>
            <div class="generalUserInfo__item">
                <input type="text"
                       v-model="USER_INFO.surname"
                       :class="{'isInvalid': $v.USER_INFO.surname.$error}"
                       @input="$v.USER_INFO.surname.$touch()"
                       class="generalUserInfo-main__input"
                       placeholder="Enter ur surname">
                <div class="userInfo__error" v-if="!$v.USER_INFO.surname.required">Surname is required</div>
            </div>
            <input type="text" :value="USER_INFO.email" readonly class="generalUserInfo-main__input">
            <div class="infoRadio">
                <div class="infoRadio-item" @click="gender = 'male'">
                    <input type="radio" id="gender1" v-model="USER_INFO.gender" value="male"
                           class="infoRadio-item__radio">
                    <label for="gender1" class="infoRadio-item__label">Male</label>
                </div>
                <div class="infoRadio-item" @click="gender = 'female'">
                    <input type="radio" id="gender2" v-model="USER_INFO.gender" value="female"
                           class="infoRadio-item__radio">
                    <label for="gender2" class="infoRadio-item__label">Female</label>
                </div>
            </div>
            <button class="generalUserInfo-main__btnPass">Change Password</button>
            <button @click="updateUser"
                    :disabled="$v.$invalid"
                    :class="{'generalUserInfo-main__btnPass-disabled': $v.$invalid}"
                    class="generalUserInfo-main__btn"
            >Save Changes</button>
        </div>
    </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {required} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {}
    },
    validations: {
      USER_INFO: {
        name: {
          required
        },
        surname: {
          required
        }
      }
    },
    methods: {
      ...mapActions([
        'UPDATE_USER_ADDRESS'
      ]),
      ...mapMutations([
        'MOUNT_SUCCESS_ERROR'
      ]),
      updateUser() {
        const userData = {
          name: this.USER_INFO.name,
          surname: this.USER_INFO.surname,
          gender: this.USER_INFO.gender
        };
        this.UPDATE_USER_ADDRESS(userData);
      }
    },
    computed: {
      ...mapGetters([
        'USER_INFO',
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

    .generalUserInfo {
        display: flex;
        flex-direction: column;
        width: 1200px;
        align-items: center;
        opacity: 0;
        transition: .4s;
        animation: show .5s 1;
        animation-fill-mode: forwards;
        animation-delay: .2s;

        &__item {
            margin-bottom: 50px;
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
            margin-top: 50px;
            opacity: 0;
            transition: .4s;
            animation: show .5s 1;
            animation-fill-mode: forwards;
            animation-delay: .2s;
        }

        &__success {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 600px;
            height: 40px;
            font-size: 17px;
            /*text-transform: uppercase;*/
            color: rgb(0, 145, 61);
            font-family: 'Tahoma', serif;
            background-color: rgba(0, 255, 0, 0.1);
            border: 2px solid rgba(0, 255, 0, .5);
            border-radius: 5px;
            margin-top: 50px;
            opacity: 0;
            transition: .4s;
            animation: show .5s 1;
            animation-fill-mode: forwards;
            animation-delay: .2s;
        }

        &-main {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 50px;

            &__input {
                width: 550px;
                height: 40px;
                font-family: 'Tahoma', serif;
                font-size: 20px;
                border: none;
                border-bottom: 2px solid gray;
                outline: none;
                padding-left: 10px;
            }

            &__btn {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 550px;
                height: 60px;
                margin-top: 40px;
                background-color: black;
                color: #ffffff;
                font-family: 'Tahoma', serif;
                font-size: 20px;
                outline: none;
            }

            &__btnPass {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 550px;
                height: 60px;
                margin-top: 40px;
                background-color: rgba(255, 0, 0, .7);
                color: #ffffff;
                font-family: 'Tahoma', serif;
                font-size: 20px;
                outline: none;
                &-disabled {
                    background-color: rgba(#000, .6);
                }
            }
        }
    }

    .infoRadio {
        display: flex;
        justify-content: space-between;
        width: 550px;
        margin-top: 10px;

        &-item {
            height: 60px;

            &__radio {
                display: none;
            }

            &__label {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 260px;
                height: 60px;
                border: 1px solid black;
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
    .userInfo__error {
        padding-left: 10px;
        color: red;
        font-size: 20px;
        margin-top: 5px;
    }
</style>