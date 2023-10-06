<template>
    <div reset-password>
        <Modal :modalMessage="modalMessage" v-if="modalActive" v-on:close-modal="closeModal"/>
        <Loading v-if="loading" />
        <div class="form-wrap">
            <form class="reset">
                <p class="login-register">
                    Back To 
                    <router-link class="router-link" :to="{name: 'login'}">Login</router-link>
                </p>
                <h2>Reset Password</h2>
                <p>Forgot your password? Enter your email to reset it</p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email">
                        <img class="icon" src="../assets/Icons/user-alt-light.svg" alt="">
                    </div>
                </div>
                <button @click.prevent="resetPassword">Reset</button>
                <div class="angle"></div>
            </form>
            <div class="background"></div>
        </div>
    </div>
</template>

<script>
// import firebase from 'firebase/app';
// import 'firebase/auth';
import Modal from '../components/Modal.vue'
import Loading from '../components/Loading.vue'
export default {
    name: 'forgot-password',
    data() {
        return {
            email: null,
            modalMessage: "",
            modalActive: false,
            loading: null,
        };
    },
    components:{ Modal, Loading },
    methods: {
        resetPassword(){
          this.loading = true;
          firebase.auth().sendPasswordResetEmail(this.email).then(() =>{
                this.modalMessage = "If your account exists, you will recieve an email";
                this.loading = false;
                this.modalActive = true;
            }).catch((err) =>{
                this.modalMessage = err.message;
                this.loading = false;
                this.modalActive = true;
            })
        },
        closeModal() {
            this.modalActive = !this.modalActive;
            this.email = '';
        },
    },
};
</script>

<style lang="scss" scoped>
    .reset-password{
        position: relative;
        .form-wrap{
            .reset{
                h2{
                    margin-bottom: 8px;
                }
                p{
                    text-align: center;
                    margin-bottom: 32px;
                }
            }
        }
    }
</style>