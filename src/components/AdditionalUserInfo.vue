<template>
    <div class="additionalUserInfo">
        <div v-if="SUCCESS_ERROR.success !== ''" class="additionalUserInfo__success">{{SUCCESS_ERROR.success}}
        </div>
        <div class="additionalUserInfo-main">
            <input type="text" v-model="USER_INFO.country" class="additionalUserInfo-main__input"
                   placeholder="Enter ur country">
            <input type="text" v-model="USER_INFO.city" class="additionalUserInfo-main__input"
                   placeholder="Enter ur city">
            <input type="text" v-model="USER_INFO.address" class="additionalUserInfo-main__input"
                   placeholder="Enter ur address">
            <input type="text" v-model="USER_INFO.cityIndex" class="additionalUserInfo-main__input"
                   placeholder="Enter ur cityIndex">
            <input type="text" v-model="USER_INFO.phonenumber" class="additionalUserInfo-main__input"
                   placeholder="Enter ur phonenumber">
            <button @click="updateUser" class="additionalUserInfo-main__btn">Save Changes</button>
        </div>
    </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    data() {
      return {
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
          country: this.USER_INFO.country,
          city: this.USER_INFO.city,
          address: this.USER_INFO.address,
          phonenumber: this.USER_INFO.phonenumber,
          cityIndex: this.USER_INFO.cityIndex
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

    .additionalUserInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1200px;
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
                padding-top: 1.5rem;
                margin-bottom: 50px;
            }

            &__btn {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 550px;
                height: 60px;
                margin-top: 13px;
                background-color: black;
                color: #ffffff;
                font-family: 'Tahoma', serif;
                font-size: 20px;
                outline: none;
            }
        }
    }
</style>