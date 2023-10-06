import { createStore } from 'vuex'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const store = createStore({
  state,
  actions,
  mutations,
  getters,
  accessToken: '',
  userProfileData: {},
  endpoints: {
    identity: {
      user: 'v01/identity/me',
      signin: '/identity/login',
      signinOtp: '/identity/signin-otp-complete',
      otpResend: 'v01/identity/signin-otp-resend',
      changePwd: 'v01/identity/change-pwd',
      resetPwdInit: 'v01/identity/reset-pwd-init',
      resetPwdComp: 'v01/identity/reset-pwd-complete',
    }
  }
})

export default store;