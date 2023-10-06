<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account? 
        <router-link class="router-link" :to="{name: 'login'}">Login</router-link>
      </p>
      <h2>Create Your Continental Food Account</h2>
      <div class="inputs">
        <div class="input">
            <input type="text" placeholder="First Name" v-model="firstName">
            <img class="icon" src="../assets/Icons/user-alt-light.svg" alt="">
          </div>
          <div class="input">
            <input type="text" placeholder="Last Name" v-model="lastName">
            <img class="icon" src="../assets/Icons/user-alt-light.svg" alt="">
          </div>
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <img class="icon" src="../assets/Icons/envelope-regular.svg" alt="">
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password">
            <img class="icon" src="../assets/Icons/lock-alt-solid.svg" alt="">
          </div>
          <div v-show="error" class="error">{{ this.errorMsg }}}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
    import store from "../store";
    import axiosClient from "../axiosClient.js";
    import { useRouter } from "vue-router";
    const router = useRouter();
export default {
    name: 'register',

    data() {
       return {
        firstName: "",
        lastName:"",
        username:"", 
        email:"",
        password:"",
        error: null,
        errorMsg: "",
       };
    },
    methods: {
        async register(){
            if (
                this.email !== "" && 
                this.password !== "" && 
                this.firstName !== "" && 
                this.lastName !== ""
            ) {
                     this.error = false;
                    this.errorMsg = '';
                    var regData = {
                        "password": this.password,
                        "username": this.email,
                        "firstName": this.firstName,
                        "lastName": this.lastName,
                        "dateOfBirth": "1987-05-20T20:33:17.898Z",
                        "phone": "",
                        "currentCity": ""
                    }
                    let result = await axiosClient.post(`Identity/registration`, regData)
                        debugger
                        if(result.status === 200 ||result.status === 201){
                          var dat = result.data;
                          var token = result.data.token;
                          var tokenObject = JSON.parse(atob(token.split('.')[1]));
                          var userProfileId = tokenObject.UserProfileId
                          dat.profileId = userProfileId;
                          debugger
                          store.commit('setProfileInfo', dat)
                        }else{

                        }
                    
               this.$router.push({name: 'home'})
               return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all fields!";
            return
        }  
    },
};
</script>
<script setup>


</script>
<style lang="scss" scoped>
   .register{
    h2{
        max-width: 350px;
        font-weight: 500;
    }
   }
</style>