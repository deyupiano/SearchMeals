<template>
    <footer>
        <div class="container">
            <div class="left">
              <div class="col-1">
                <router-link class="header" :to="{name: 'home'}">Continental Foods</router-link>
                 <ul>
                    <li>
                        <!-- <a href=""><youTube class="svg-icon" /></a> -->
                        <a href=""><img src="../assets/Icons/youtube-brands.svg" class="svg-icon" /></a>
                    </li>
                    <li>
                        <!-- <a href=""><twitter class="svg-icon" /></a> -->
                        <a href=""><img src="../assets/Icons/twitter-brands.svg" class="svg-icon" /></a>
                    </li>
                    <li>
                        <!-- <a href=""><instagram class="svg-icon" /></a> -->
                        <a href=""><img src="../assets/Icons/instagram-brands.svg" class="svg-icon" /></a>
                    </li>
                    <li>
                        <!-- <a href=""><linkedin class="svg-icon" /></a> -->
                        <a href=""><img src="../assets/Icons/linkedin-brands.svg" class="svg-icon" /></a>
                    </li>
                 </ul>
              </div>
              <div class="col-2">
                    <router-link class="link" :to="{name: 'home'}">Home</router-link>
                    <router-link class="link" :to="{name: 'blogs'}">Blogs</router-link>
                    <router-link v-if="user" class="link" to="#">Create Post</router-link>
                    <router-link v-if="!user" class="link" :to="{name: 'login'}">Login In/Register</router-link>
              </div>
            </div>
            <div class="right">
               <p>Copyright 2023 All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>
<script>
    // import youTube from "../assets/Icons/youtube-brands.svg";
    // import twitter from "../assets/Icons/twitter-brands.svg";
    // import instagram from "../assets/Icons/instagram-brands.svg";
    // import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
    name: 'footer-vue',
    components:{
    //   youTube,
    //   twitter,
    //   instagram,
    //   linkedin
    },
    computed:{
        user(){
        return this.$store.state.user;
        }
    }
};
</script>

<style lang="scss" scoped>
    footer{
        margin-top: auto;
        padding: 100px 25px;
        background-color: #303030;
        .container{
            display: flex;
            flex-direction: column;
            gap: 32px;
            @media (min-width: 800px) {
                flex-direction: row;
                gap:0px;
            }
            >div{
                display: flex;
                flex: 1;
            }
            .left{
                gap:32px;
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                @media (min-width: 800px) {
                    flex-direction: row;
                    align-items: initial;
                    gap: 0;
                }
            }
            .header{
                font-size: 24px;
                color: #fff;
                text-decoration: none;
                font-weight: 600;
                margin: 0 auto;

                @media (min-width: 800px) {
                    margin-left: 57px;
                }

            }
            ul{
                gap: 16px;
                list-style: none;
                display: flex;
            }
            .col-1,
            .col-2{
                gap: 32px;
                display: flex;
                flex: 1;
                @media (min-width: 800px) {
                    gap: 5px;
                }
            }

            .col-1{
                flex-direction: column;
                h2{
                    text-align: center;
                    @media (min-width: 800px) {
                        text-align: initial;
                    }
                }
                ul{
                    margin-top: auto;

                    li{
                        display: flex;
                        align-items: center;

                        .svg-icon{
                            width: 25px;
                            height: auto;
                            color: #fff;
                            filter: invert(0.9)
                            sepia(1)
                            hue-rotate(200deg)
                            saturate(0)
                            brightness(1);
                            }
                    }
                }
            }
            .col-2{
                height: 100%;
                    justify-content: center;
                    flex-direction: row;
                    flex-wrap: wrap;
                    font-size: 16px;
                    font-weight: 500;
                    text-decoration: none;
                    .link{
                        color: white;
                    }
                    @media (min-width: 800px) {
                        flex-direction: column;
                    }
            }
        }
        .right{
            gap: 32px;
            color: #fff;
            align-items: center;
            flex-direction: column;
            @media (min-width: 800px) {
                align-items: flex-end;
                gap: 0;
            }
        }
        p{
            margin-top: auto;
        }
    }
</style>
