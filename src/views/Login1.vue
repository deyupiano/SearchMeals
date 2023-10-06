<template>
<div class="login">
  <div class="col grid">
    <!-- <div @click="changeLoginStage(4)">FP</div> -->
    <div>
      <!-- Begin: Default -->
      <div :key="1" v-show="scope.currentLoginStage === 1">
        <form class="animated fadeInLeft delay-0-5s">
          <div><img src="./../assets/vue.svg" alt="Delight Meals"></div>
          <div>
            <label><span>Your username or e-mail</span>
              <input type="text" placeholder="Login or e-mail" v-model="login.username.value"
                @keyup.enter="handleLogin">
            </label>
          </div>
          <div>
            <label><span>Your password</span>
              <input type="password" placeholder="Password" autocomplete="current-password"
                v-model="login.password.value" @keyup.enter="handleLogin">
            </label>
          </div>
          <div class="flex">
            <div class="col left">
              <button class="link" type="button" @click="changeLoginStage(2)">Register</button>
            </div>
            <div class="col">
              <button class="link" type="button" @click="changeLoginStage(3)" style="min-width: 180px;">Forgot
                password?</button>
            </div>
            <div class="col right">
              <!-- <router-link to="/dashboard"> -->
              <button class="primary" type="button" @click="handleLogin" id="login"
                style="min-width: 125px;">Login</button>
              <!-- </router-link> -->
            </div>
          </div>
        </form>
        <!-- TABS FOR TYPE OF LOGIN (IN STUDY) -->
        <!-- <div class="login-type animated fadeIn delay-0-5s">
                    <div class="padding"></div>
                    <div class="tabs">
                        <div @click="galleryIndex = 0" class="tab" :class="galleryIndex == 0 ? 'active' : ''">
                           <img src="assets/images/careplan.svg" alt="">
                            <div>Clinic & GP's</div>
                        </div>
                        <div @click="galleryIndex = 1" class="tab" :class="galleryIndex == 1 ? 'active' : ''">
                            <img src="assets/images/mobility.svg" alt="">
                            <div>Care Plan</div>
                        </div>
                        <div @click="galleryIndex = 2" class="tab" :class="galleryIndex == 2 ? 'active' : ''">
                            <img src="assets/images/user.svg" alt="">
                            <div>Patient</div>
                        </div>
                    </div>
                </div> -->
        <!--  -->
      </div>
      <!-- End: Default -->
      <!-- Begin: Register -->
      <div :key="2" v-show="scope.currentLoginStage === 2">
        <form class="animated fadeIn">
          <!-- <div>
            <label><span>NSH number</span>
              <input type="text" placeholder="NHS number" v-model="register.nhsNumber.value"
                @keyup.enter="handleRegister">
            </label>
          </div> -->
          <div>
            <label><span>Your E-mail</span>
              <input type="text" placeholder="E-mail" v-model="register.email.value" @keyup.enter="handleRegister">
            </label>
          </div>
          <div>
            <label><span>Your password</span>
              <input :type="[register.password.show ? 'text' : 'password']" placeholder="Password"
                autocomplete="current-password" v-model="register.password.value" @keyup.enter="handleRegister">
            </label>
          </div>
          <div>
            <label><span>Re-type your password</span>
              <input :type="[register.password.show ? 'text' : 'password']" placeholder="Retype your password"
                autocomplete="current-password" v-model="register.confirmPassword.value" @keyup.enter="handleRegister">
            </label>
          </div>
          <div>
            <label class="flex align-items-center">
              <input type="checkbox" v-model="register.password.show" />
              <span>Show Password</span>
            </label>
          </div>
          <div className="validation_wrapper" v-if="register.password.value.length > 0">
            <div>
              <p>Password must contain:</p>
            </div>
            <div class="flex items_center">
              <span v-if="register.password.validate.uppercase"><img
                  :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>At least one uppercase letter</span>
            </div>
            <div class="flex items_center">
              <span v-if="register.password.validate.lowercase"><img
                  :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>At least one lowercase letter</span>
            </div>
            <div class="flex items_center">
              <span v-if="register.password.validate.number"><img :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>At least one number 0-9</span>
            </div>
            <div class="flex items_center">
              <span v-if="register.password.validate.symbol"><img :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>At least one symbol like @$%&</span>
            </div>
            <div class="flex items_center">
              <span v-if="register.password.validate.length"><img :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>10 or more characters</span>
            </div>
          </div>
          <div class="flex">
            <div class="col">
              <button class="link" type="button" @click="changeLoginStage(1)">Return to Login</button>
            </div>
            <div class="col right">
              <!-- <router-link to="/dashboard"> -->
              <button class="primary with-icon" type="button" :disabled="passwordButtonDisable('register')"
                @click="handleRegister">
                <span>Register</span>
                <img class="w-10 h-10" src="./../assets/addUser.png" alt="add user">
              </button>
              <!-- </router-link> -->
            </div>
          </div>
        </form>
      </div>
      <!-- End: Register -->
      <!-- Begin: Forgot Password -->
      <div :key="3" v-show="scope.currentLoginStage === 3">
        <form class="animated fadeIn" id="forgotForm">
          <div>
            <label><span>Your E-mail</span>
              <input type="text" placeholder="E-mail" v-model="forgotPassword.email.value"
                @keyup.enter="handleForgotPassword">
            </label>
          </div>
          <div class="flex">
            <div class="col">
              <button class="link" type="button" @click="changeLoginStage(1)">Return to Login</button>
            </div>
            <div class="col right">
              <!-- <router-link to="/dashboard"> -->
              <button class="primary with-icon" id="reset" type="button" @click="handleForgotPassword">
                <span>Reset</span>
                <img src="assets/images/resetPassword.svg" alt="reset password">
              </button>
              <!-- </router-link> -->
            </div>
          </div>
        </form>
        <br>
      </div>
      <!-- End: Forgot Password -->
      <!-- Begin: Reset Password -->
      <div :key="4" v-if="scope.currentLoginStage === 4">
        <form class="animated fadeIn" id="resetForm">
          <div>
            <label><span>New Password</span>
              <input :type="[resetForm.password.show ? 'text' : 'password']" placeholder="password"
                v-model="resetForm.password.value" @keyup="handlePasswordInput('resetForm')"
                @keyup.enter="handleResetPassword">
            </label>
          </div>
          <div>
            <label><span>Confirm Password</span>
              <input :type="[resetForm.password.show ? 'text' : 'password']" placeholder="re-enter password"
                v-model="resetForm.confirmPassword.value" @keyup="handlePasswordConfirm('resetForm')"
                @keyup.enter="handleResetPassword">
            </label>
          </div>
          <div>
            <label class="flex align-items-center">
              <input type="checkbox" v-model="resetForm.password.show" />
              <span>Show Password</span>
            </label>
          </div>
          <div className="validation_wrapper" v-if="resetForm.password.value.length > 0">
            <div>
              <p>Password must contain:</p>
            </div>
            <div class="flex items_center">
              <span v-if="resetForm.password.validate.uppercase"><img
                  :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>At least one uppercase letter</span>
            </div>
            <div class="flex items_center">
              <span v-if="resetForm.password.validate.lowercase"><img
                  :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>At least one lowercase letter</span>
            </div>
            <div class="flex items_center">
              <span v-if="resetForm.password.validate.number"><img
                  :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>At least one number 0-9</span>
            </div>
            <div class="flex items_center">
              <span v-if="resetForm.password.validate.symbol"><img
                  :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>At least one symbol like @$%&</span>
            </div>
            <div class="flex items_center">
              <span v-if="resetForm.password.validate.length"><img
                  :src="require('./../assets/checkmark.svg')" /></span>
              <span v-else>❌</span>
              <span>10 or more characters</span>
            </div>
          </div>
          <VueRecaptcha :sitekey="sitekey" :load-recaptcha-script="true" @verify="handleReCaptchaSuccess"
            @error="handleReCaptchaError">
          </VueRecaptcha>
          <br><br>
          <div class="flex">
            <div class="col right">
              <!-- <router-link to="/dashboard"> -->
              <button class="primary with-icon" type="button" :disabled="passwordButtonDisable('resetForm')"
                @click="handleResetPassword">
                <span>Save</span>
                <img src="assets/images/resetPassword.svg" alt="reset password">
              </button>
              <!-- </router-link> -->
            </div>
          </div>
        </form>
        <br>
      </div>
      <!-- End: Reset Password -->
      <!-- Begin: 2nd Factor -->
      <div :key="5" v-if="scope.currentLoginStage === 5">
        <form class="animated fadeIn" id="codeForm">
          <div>
            <label><span>Enter Code from email/sms</span>
              <input type="text" placeholder="OTP" v-model="otp.value" @keyup.enter="handleOTPLogin">
            </label>
          </div>
          <VueRecaptcha :sitekey="sitekey" :load-recaptcha-script="true" @verify="handleReCaptchaSuccess"
            @error="handleReCaptchaError">
          </VueRecaptcha>
          <br><br>

          <div class="flex">
            <div class="col right">
              <!-- <router-link to="/dashboard"> -->
              <button class="primary" type="button" @click="handleOTPLogin">
                <span>Login</span>
              </button>
              <!-- </router-link> -->
            </div>
          </div>
          <br /><br />
          <hr />
          <button class="primary" type="button" @click="handleRequestOTP('sms')">
            <span>Request SMS OTP</span>
          </button>
          <button class="primary" type="button" @click="handleRequestOTP('email')">
            <span>Request EMAIL OTP</span>
          </button>
        </form>
        <br>
      </div>
      <!-- End: 2nd Factor -->
    </div>
  </div>
  <div class="col animated fadeIn">
    <div class="animated fadeInRight login-side-image">
      <div v-if="galleryIndex == 0" class="animated zoom image i1"
        style="background-image: url('./../assets/login1.jpeg');"></div>
      <div v-if="galleryIndex == 1" class="animated zoom image i2"
        style="background-image: url('./../assets/login2.jpg');"></div>
      <div v-if="galleryIndex == 2" class="animated zoom image i3"
        style="background-image: url('./../assets/login3.jpg');"></div>
        
      <!-- Static BG (for overlay effect) -->
            <!-- <div v-if="galleryIndex == 1" class="image i1 bg" style="background-image: url('./../assets/login1.jpeg');"></div>
            <div v-if="galleryIndex == 2" class="image i2 bg" style="background-image: url('./../assets/login2.jpg');"></div>
            <div v-if="galleryIndex == 0" class="image i3 bg" style="background-image: url('./../assets/login3.jpg');"></div>
            <div class="slider">
                <div class="bar"></div>
            </div> -->
    </div>
</div>
  <HelpAction/>
</div>
</template>

<script>
import { computed, defineComponent, reactive } from 'vue';
import axios from 'axios';
import store from "../store";
import { useRoute } from 'vue-router'
import { handleErrors } from '../helpers/helpers';
// import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'
// import { VueRecaptcha } from 'vue-recaptcha';
import HelpAction from "../components/HelpAction/HelpAction.vue";
// import validator from 'validator';
// import { BACKENDURL } from '../../utils/constants';
/* eslint-disable @typescript-eslint/no-explicit-any */

export default defineComponent({
  name: 'Login',
  components: {
    // VueRecaptcha,
    HelpAction
  },
  props: {
    msg: String,
    step: String,
    test: String,
  },
  data() {
    // console.log('test', this.$route);
    //1 captial, 1 symbol, 1 number, and 10 character
    return {
      loginData: {
        login: 'deyupiano@gmail.com',
        password: '412515@Ade,.',
        nonce: 'NhScOM4p4L9zY7C7mKmF',
        requiredTokenType: ''
      },
      login: {
        username: {
          value: '',
          valid: false,
        },
        password: {
          value: '',
          valid: false
        }
      },
      register: {

        email: {
          value: '',
          valid: false
        },
        password: {
          value: '',
          show: false,
          valid: false,
          validate: {
            uppercase: false,
            lowercase: false,
            number: false,
            symbol: false,
            length: false
          }
        },
        confirmPassword: {
          value: '',
          valid: false
        }
      },
      forgotPassword: {
        email: {
          value: '',
          valid: false
        },
        token: '',
      },
      resetForm: {
        password: {
          value: '',
          show: false,
          valid: false,
          validate: {
            uppercase: false,
            lowercase: false,
            number: false,
            symbol: false,
            length: false
          }
        },
        confirmPassword: {
          value: '',
          valid: false
        },
        token: useRoute().query.tkn
      },
      otp: {
        value: ''
      },
      token: "",
      galleryIndex: 0,
      endpoints: {},
      // sitekey: process.env.RECAPTCHA_SITE_KEY
    }
  },
  computed: {
    passwordButtonDisable() {
      return (stage = "register") => !(this[stage].password.valid && this[stage].confirmPassword.valid);
    }
  },
  methods: {
    validateCredentials(formType) {
      switch (formType) {
        case 'login':
          if (this.login.username.value.length > 5) {
            this.login.username.valid = true;
          } else {
            alert('username must be 6 characters or more');
            this.login.username.valid = false;
          }
          if (
            this.login.password.value.length >= 10 &&
            (/([A-Z]+)/g).test(this.login.password.value) &&
            (/([0-9]+)/g).test(this.login.password.value) &&
            (/[^\w\s\d]/g).test(this.login.password.value)
          ) {
            this.login.password.valid = true;
          } else {
            alert('please check password and retry');
            this.login.password.valid = false;
          }
          break;

        case 'register':
          //validate register;
          if (
            this.register.password.value.length >= 10 &&
            (/([A-Z]+)/g).test(this.register.password.value) &&
            (/([0-9]+)/g).test(this.register.password.value) &&
            (/[^\w\s\d]/g).test(this.register.password.value)
          ) {
            this.register.password.valid = true;
          } else {
            alert('please check password and retry');
            this.register.password.valid = false;
          }
          break;

        case 'forgotPassword':
          //validate forgotpassword;
          if (/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/.test(this.forgotPassword.email.value)) {
            this.forgotPassword.email.valid = true;
          } else {
            this.forgotPassword.email.valid = false;
          }
          break;

        case 'resetPassword':
          if (
            this.resetForm.password.value.length >= 10 &&
            (/([A-Z]+)/g).test(this.resetForm.password.value) &&
            (/([0-9]+)/g).test(this.resetForm.password.value) &&
            (/[^\w\s\d]/g).test(this.resetForm.password.value) &&
            this.resetForm.password.value === this.resetForm.confirmPassword.value &&
            this.resetForm.token != undefined
          ) {
            this.resetForm.password.valid = true;
            this.resetForm.confirmPassword.valid = true;
          } else {
            alert('Please check password and retry');
            this.resetForm.password.valid = false;
            this.resetForm.confirmPassword.valid = true;
          }
      }
    },
    async handleLogin() {
      const url = process.env.VUE_APP_URL + this.endpoints.identity.signin;
      await this.validateCredentials('login');

      if (this.login.username.valid && this.login.password.valid) {
        const loginButton = document.getElementById('login');
        const oldLoginButtonValue = loginButton.innerHTML;
        loginButton.innerHTML = 'Loading...';
        // if(confirm('simulate successful api call')){
        //     //login
        // }
        this.loginData.login = this.login.username.value;
        this.loginData.password = this.login.password.value;

        axios.post(url, this.loginData)
          .then(async res => {
            console.log(res);
            switch (res.status) {
              case 200:
                localStorage.setItem("meals:authtoken", res.data.token);
                await store.dispatch('updateState', { key: "accessToken", value: res.data.token });
                this.$router.push({ name: 'AUK Dashboard', params: { axiosHeaderSet: 0 } });
                break;

              case 202:
                localStorage.setItem("meals:authtoken", res.data.token);
                await store.dispatch('updateState', { key: "accessToken", value: res.data.token });
                this.changeLoginStage(5);
                break;

              default:
                console.log('status', res.status);
                break;
            }

          })
          .catch(err => {
            loginButton.innerHTML = oldLoginButtonValue;
            alert('login failed, please confirm credentials and try again');
          });

      }
    },
    async handleRegister() {
      console.log('handleRegister');
      await this.validateCredentials('register');
    },
    handlePasswordInput(stage = "register") {
      const code = this[stage].password.value;
      const { uppercase, lowercase, number, symbol, length } = this[stage].password.validate;
      this[stage].password.validate.uppercase = /[A-Z]/.test(code) ? true : false;
      this[stage].password.validate.lowercase = /[a-z]/.test(code) ? true : false;
      this[stage].password.validate.number = /[0-9]/.test(code) ? true : false;
      this[stage].password.validate.symbol = /[-!@$%^&*()_+|~=`{}[\\\]:";'<>?,./]/.test(code) ? true : false;
      this[stage].password.validate.length = code.length >= 10 ? true : false;
      // this[stage].password.validate.length = false;
      this[stage].password.valid = uppercase && lowercase && number && symbol && length ? true : false;
      if (this[stage].password.valid && this[stage].confirmPassword) {
        this[stage].confirmPassword.valid = true;
      }

    },
    handlePasswordConfirm(stage = "register") {
      if (this[stage].confirmPassword.value === this[stage].password.value) {
        this[stage].confirmPassword.valid = true;
      } else {
        this[stage].confirmPassword.valid = false;
      }
    },
    async handleForgotPassword() {
      await this.validateCredentials('forgotPassword');
      if (this.forgotPassword.email.valid) {
        const resetButton = document.getElementById('reset');
        const oldResetButtonValue = resetButton.innerHTML;
        resetButton.innerHTML = 'Loading...';
        await axios.post(process.env.VUE_APP_URL + this.endpoints.identity.resetPwdInit, {
          email: this.forgotPassword.email.value
        })
          .then(res => {
            console.log('res', res);
            if (res.status === 200) {
              const form = document.getElementById('forgotForm');
              form.innerHTML = '<h4 class="center response">An email will be sent if there\'s an account with this email, please check your inbox.</h4>';
            }
          })
          .catch(err => {
            resetButton.innerHTML = oldResetButtonValue;
            console.log('handleForgotPassword', err)
          })
      } else {
        alert('Email is Invalid')
      }
    },
    async handleResetPassword() {
      const captcha = document.getElementById("g-recaptcha-response");
      if (!captcha.value) {
        alert("Please complete captcha check");
        return false;
      } else {
        await this.validateCredentials('resetPassword');
        if (this.resetForm.password.valid && this.resetForm.confirmPassword.valid) {
          await axios.post(process.env.VUE_APP_URL + this.endpoints.identity.resetPwdComp, {
            token: this.resetForm.token,
            newPassword: this.resetForm.password.value
          })
            .then(res => {
              if (res.status === 200) {
                alert('Password reset completed successfully');
                this.changeLoginStage(1);
              }
            })
            .catch(err => {
              alert('Token may have expired, please request a new token and retry');
              this.changeLoginStage(3);
              console.log('handleResetPassword', err)
            })
          //redirect to login page upon success
        }
      }
    },
    async handleRequestOTP(type) {
      const token = store.getters.getState("accessToken");
      let url = '';

      switch (type) {
        case 'email':
          url = process.env.VUE_APP_URL + this.endpoints.identity.otpResend;
          break;
        case 'sms':
          url = 'm';
          break;
      }
      await axios.post(url, {
        token: token,
        nonce: this.loginData.nonce
      })
        .then(async res => {
          if (res.status === 200) {
            localStorage.setItem("confluence:authtoken", res.data.token);
            await store.dispatch('updateState', { key: "accessToken", value: res.data.token });
          }
        })
        .catch(err => {
          console.log(err);
        })

      alert('email/sms sent');
    },
    async handleOTPLogin() {
      const captcha = document.getElementById("g-recaptcha-response");
      if (!captcha.value) {
        alert("Please complete captcha check");
        return false;
      } else {
        const token = store.getters.getState("accessToken");
        await axios.post(process.env.VUE_APP_URL + this.endpoints.identity.signinOtp, {
          verificationCode: this.otp.value,
          token: token,
          nonce: this.loginData.nonce
        })
          .then(async res => {
            console.log('otp enterd response', res);
            if (res.status === 200) {
              localStorage.setItem("confluence:authtoken", res.data.token);
              await store.dispatch('updateState', { key: "accessToken", value: res.data.token });
              this.$router.push({ name: 'AUK Dashboard', params: { axiosHeaderSet: 0 } });
            }
          })
          .catch(err => {
            handleErrors(err, this);
          })
      }
      //verify otp endpoint & login on success;
    },
    async handleValidateToken() {
      await axios.post(process.env.VUE_APP_URL + this.endpoints.auk.validateToken, {
        token: this.token,
      }).then(async res => {
        this.changeLoginStage(4);
      }).catch(err => {
        alert("Invalid Token");
        // handleErrors(err, this);
      })
      //verify otp endpoint & login on success;
    },
    handleReCaptchaSuccess() {
      console.log('success')
    },
    handleReCaptchaError() {
      console.log('error')
    }
    // navigateTo(route: string){
    //     this.$router.push(route);
    // }
  },
  setup(props) {
    /*recaptcha*/
    const sitekey = computed(() => {
      return process.env.VUE_APP_RECAPTCHA_SITE_KEY;
    });
    /* v3 */
    // const reCaptcha = useReCaptcha() as any;
    // const recaptcha = async () => {
    //   // (optional) Wait until recaptcha has been loaded.
    //   await reCaptcha.recaptchaLoaded()
    //   const token = await reCaptcha.executeRecaptcha('login')
    //   console.log(document.getElementById('app'), token, reCaptcha);
    //   reCaptcha.instance._value.recaptcha.render('rec')
    //   // Do stuff with the received token.
    // }
    // recaptcha();
    /* recaptcha v3*/
    /*recaptcha*/
    /* eslint-disable */
    const scope = reactive(
      {
        currentLoginStage: 1, // 1 = default; 2 = register; 3 = forgot password. 4 = reset password 5 = otp
      }
    )

    const changeLoginStage = (stage) => {
      scope.currentLoginStage = stage;
    }

    return {
      sitekey,
      scope,
      changeLoginStage,
    }
  },
  created() {
    // console.log(process.env);
    // this.recaptcha();
    const { step } = useRoute().query;
    const { token } = useRoute().query;
    if (step) {
      this.changeLoginStage(Number(step));
    }
    if (token) {
      this.token = `${token}`;
      this.handleValidateToken()
    }
    if (useRoute().query.action == 'resetpwd') {
      this.changeLoginStage(4);
    }
    this.endpoints = store.getters.getState("endpoints");
    // Gallery Carousel
    const switchImage = () => {
      if (this.galleryIndex < 2) {
        this.galleryIndex++;
      } else {
        this.galleryIndex = 0
      }
      setTimeout(() => {
        switchImage();
      }, 10000);
    }
    setTimeout(() => {
      switchImage();
    }, 10000);
  },
  watch: {
    step() {
      // console.log("STEP", this.step)
    },
    'register.password.value'() {
      this.handlePasswordInput('register')
    },
    'register.confirmPassword.value'() {
      this.handlePasswordConfirm('register')
    },
    'resetForm.password.value'() {
      this.handlePasswordInput('resetForm')
    },
    'resetForm.confirmPassword.value'() {
      this.handlePasswordConfirm('resetForm')
    }
  }
});
</script>