<template>
  <header>
   <nav class="container">
  <div class="branding">
    <router-link
      :to="{ name: 'home' }"
      class="header text-orange-500"
    >
      CONTINENTAL FOODS
    </router-link>
  </div>
  <div class='nav-links'>
     <ul v-show="!mobile">
      <router-link
      :to="{ name: 'home' }"
      class="link"      
    >
      Home
    </router-link>
    <router-link
        :to="{ name: 'about' }"
        class="link"
    >
        About
    </router-link>
    <router-link
        :to="{ name: 'byName' }"
        class="link"
    >
    Search Meals
    </router-link>
    <router-link
        :to="{ name: 'byLetter' }"
        class="link"
    >
    Meals By Letter
    </router-link>
    <router-link
        :to="{ name: 'ingredients' }"
        class="link"
    >
    Meals By Ingredients
    </router-link>
    <router-link
        :to="{ name: 'blogs' }"
        class="link"
    >
        Blogs
    </router-link> 
    <router-link
        :to="{ name: 'blogs' }"
        class="link"
    >
        Create Post
    </router-link>  
    <router-link
        :to="{ name: 'login' }"
        class="link"
        v-if="!user"
    >
        Login/Register
    </router-link>
     </ul>
     <div v-show="user" @click="toggleProfileMunu"  class="profile" ref="profile">
      <span>{{ this.$store.state.profileInitials }}</span>
      <div v-show="profileMenu" class="profile-menu">
        <div class="info">
          <p class="initials">{{ this.$store.state.profileInitials }}</p>
          <div class="right">
            <p>{{ this.$store.state.profileFirstName }} {{ this.$store.state.profileLastName }}</p>
            <p>{{ this.$store.state.profileUsername }}</p>
            <p>{{ this.$store.state.profileEmail }}</p>
          </div>
        </div>
        <div class="options">
          <div class="option">
            <router-link class="option" :to="{name:'profile'}">
              <img src="../assets/Icons/user-alt-light.svg" alt="" class="icon">
              <p>Profile</p>
            </router-link>
          </div>
          <div class="option">
            <router-link class="option" :to="{name:'admin'}">
              <img src="../assets/Icons/user-crown-light.svg" alt="" class="icon">
              <p>Admin</p>
            </router-link>
          </div>
          <div @click="signOut" class="option">
              <img src="../assets/Icons/sign-out-alt-regular.svg" alt="" class="icon">
              <p>Sign Out</p>
          </div>
        </div>
      </div>
     </div>
  </div>

   </nav>
   <img @click="toggleMobileNav" v-show="mobile" class="menu-icon" src="../assets/Icons/bars-regular.svg"/>
   <transition name="mobile-nav">
    <ul v-show="mobileNav"  class="mobile-nav">
    <router-link
      :to="{ name: 'home' }"
      class="link"      
    >
      Home
    </router-link>
    <router-link
        :to="{ name: 'about' }"
        class="link"
    >
        About
    </router-link>
    <router-link
        :to="{ name: 'byName' }"
        class="link"
    >
    Search Meals
    </router-link>
    <router-link
        :to="{ name: 'byLetter' }"
        class="link"
    >
    Meals By Letter
    </router-link>
    <router-link
        :to="{ name: 'ingredients' }"
        class="link"
    >
    Meals By Ingredients
    </router-link>
    <router-link
        :to="{ name: 'gallery' }"
        class="link"
    >
        Gallery
    </router-link>
    <router-link
        :to="{ name: 'blogs' }"
        class="link"
    >
        Blogs
    </router-link> 
    <router-link
        :to="{ name: 'blogs' }"
        class="link"
    >
        Create Post
    </router-link>  
    <router-link
        :to="{ name: 'login' }"
        class="link"
        v-if="!user"
    >
        Login/Register
    </router-link>
     </ul>
   </transition>
  </header>
</template>
<script>
    import axiosClient from "../axiosClient.js";
    import store from "../store";
 export default {
  data(){
    return{
      profileMenu:null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created(){
     window.addEventListener('resize', this.checkScreen);
     this.checkScreen();
  },
  methods:{
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },
    toggleProfileMunu(e){
      if(e.target === this.$refs.profile){
        this.profileMenu = !this.profileMenu;
      }
    },
    async signOut(){ 
                   try {
                    let result = await axiosClient.post(`Identity/sign-out`)

                        if(result.status === 200 ||result.status === 201){
                          this.$router.push({name: 'home'});
                          this.error = false;
                          this.email = "";
                          debugger
                          store.state.user = null;
                          debugger  
                          var dat = {
                            profileId: "",
                            token: "",
                            firstName: "",
                            lastName: "",
                            email: ""
                          };
                          store.commit('setProfileInfo', dat)
                        }else{

                        }
                  } catch (err) {
                    this.error = true;
                   this.errorMsg = err.message;
                  }
       window.location.reload();
       //alert("email @ signout: " + this.$store.state.profileEmail); 
    }
  },
  computed:{
    user(){
      return this.$store.state.user;
    }
  }
}
</script>

<style lang="scss" scoped>
  header{
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;
    height: 67px;
  .link{
    font-weight: 500;
    padding: 0 8px;
    transition: .3s color ease;

    &:hover{
      color: #1eb8b8
    }
  }
  nav{
    display: flex;
    padding: 15px 0;

    .branding{
      display: flex;
      align-items: center;

      .header{
        font-weight: 600;
        font-size: 25px;
        text-decoration: none;
      }
    }
    .nav-links{
      position:relative;
      display: flex;
      flex:1;
      align-items: center;
      justify-content: flex-end;

      ul{
        margin-right: 32px;

        .link{
           margin-top: 32px;
        }
        .link:last-child{
          margin-right: 0px;
        }
      }
      .profile{
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background-color: #303030;
        z-index: 200;
        right:30px;
        span{pointer-events: none;}

        .profile-menu{
          position: absolute;
          top: 55px;
          right: 18px;
          width:250px;
          background-color: #303030;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.06);

          .info{
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;

            .initials{
              position:initial;
              width: 40px;
              height: 40px;
              color:  #303030;
              background-color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }

            .right{
              flex: 1;
              margin-left: 24px;

              p:nth-child(1){
                font-size: 14px;
              }
              p:nth-child(2),
              p:nth-child(3){
                 font-size: 12px;
              }
            }
          }

          .options{
            padding: 15px;
            .option{
              text-decoration: none;
              color:#fff;
              display: flex;
              align-items: center;
              margin-bottom: 12px;

              .icon{
                width: 18px;
                height: auto;
              }
              p{
                font-size: 14px;
                margin-left: 12px;
              }

              &:last-child{
                 margin-bottom: 0px;
              }
            }
          }
        }
      }
    }
  }

  .menu-icon{
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 25px;
    height: 25px;
    width: auto;
  }
  .mobile-nav{
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    z-index: 100;

    .link{
      padding: 15px 0;
      color:#fff;

    }
    
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active{
      transition: all 1s ease;
  }
    .mobile-nav-enter{
      transform: translateX(-250px);
    }
    .mobile-nav-enter-to{
      transform: translateX(0);
    }
    .mobile-nav-leave-to{ 
      transform: translateX(-250px);
    }
}   
</style>
