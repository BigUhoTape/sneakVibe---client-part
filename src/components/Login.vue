<template>
    <div class="login">
        <div v-if="error !== ''" class="login__error">{{ error }}</div>
        <div class="loginInput">
            <input type="text" v-model="email" id="dynamic-label-input" placeholder="Enter ur email">
            <label for="dynamic-label-input">Enter ur email</label>
        </div>
        <div class="loginInput">
            <input type="password" v-model="password" id="dynamic-label-input-pass" placeholder="Enter ur password">
            <label for="dynamic-label-input-pass">Enter ur password</label>
        </div>
        <button @click="loginUser" class="login__btn">Login</button>
<!--        <LoginWith />-->
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapActions } from 'vuex'
    // import LoginWith from "./LoginWith";

    export default {
        name: 'Login',
        components: {
            // LoginWith
        },
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            ...mapActions([
                'CHANGE_LOGIN_STATUS',
                'GET_USER_INFORMATION'
            ]),
            async loginUser() {
                let user = {
                    email: this.email,
                    password: this.password
                };
                await axios.post('http://localhost:8081/api/user/login', user)
                    .then(res => {
                        if (res.status === 200) {
                            localStorage.setItem('token', res.data.token);
                            this.CHANGE_LOGIN_STATUS();
                            this.$router.go(-1);
                        }
                    }, err => {
                        console.log(err.response);
                        this.error = err.response.data.error;
                    });
                this.GET_USER_INFORMATION();
            }
        }
    }
</script>

<style lang="less" scoped>
    @keyframes show{
        0%{
            opacity:0;
        }
        100% {
            opacity:1;
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
        position: relative;
        padding-top: 1.5rem;
        margin-bottom: 50px;
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
</style>