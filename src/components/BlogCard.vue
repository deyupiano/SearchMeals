<template>
    <div class="blog-card">
       <div v-show="editPost" class="icons">
            <div class="icon">
                <!-- <Edit class="icon"/> -->
                <img src="../assets/Icons/edit-regular.svg" alt="" class="edit">
            </div>
            <div class="icon">
                <!-- <Delete class="icon"/> -->
                <img src="../assets/Icons/trash-regular.svg" alt="" class="delete">
            </div>
       </div>
       <img :src="`../src/assets/blogCards/${post.blogCoverPhoto}.jpg`" alt="">
       <div class="info">
        <h4>{{ post.blogTitle }}}</h4>
        <h6>Posted on: {{ post.blogDate }}}</h6>
        <router-link class="link" to="#">
            <!-- View The Post <Arrow class="arrow"/> -->
            View The Post  <img src="../assets/Icons/arrow-right-light.svg" class="arrow"/>
        </router-link>
       </div>
    </div>
</template>

<script>
    // import Arrow from "../assets/Icons/arrow-right-light.svg";
    // import Edit from "../assets/Icons/edit-regular.svg";
    // import Delete from "../assets/Icons/trash-regular.svg";
export default {
    name: 'blogCard',
    props:["post"], 
    computed:{
        editPost(){
            return this.$store.state.editPost
        }
    }
};
</script>

<style lang="scss" scoped>
   .blog-card{
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: #fff;
        min-height: 420px;
        transition: 0.5s ease all;
        &:hover{
            transform: rotateZ(-1deg) scale(1.01);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.06);
        }
        .icons{
           display: flex;
           position: absolute;
           top: 10px;
           right:10px;
           z-index: 99;

           .icon{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background-color: #fff;
                transition: 0.5s ease all;

                &:hover {
                    background-color: #303030;
                    
                    .edit, .delete{
                        filter: invert(0.9)
                            sepia(1)
                            hue-rotate(200deg)
                            saturate(0)
                            brightness(1);
                    }
                }
                &:nth-child(1){
                  margin-right: 8px;
                }

                .edit,
                .delete{
                    pointer-events: none;
                    height: 15px;
                    width: auto;
                }
           }
        }
        img{
            display: block;
            border-radius: 8px 8px 0 0;
            z-index: 1;
            width: 100%;
            min-height: 20px;
            object-fit: cover;
        }
        .info{
            display: flex;
            flex-direction: column;
            height: 100%;
            z-index: 3;
            padding: 32px 16px;
            color: #000;

            h4{
                font-weight: 300;
                font-size: 20px;
                padding-bottom: 8px;
            }
            h6{
                font-size: 12px;
                font-weight: 400;
                padding-bottom: 16px;
            }

            .link{
                display: inline-flex;
                align-items: center;
                margin-top: auto;
                font-weight: 500;
                padding-top: 20px;
                font-size: 12px;
                padding-bottom: 4px;
                transition: 0.5s ease-in all;

                &:hover{
                    color: rgba(48,48,48, 0.8);
                }
                .arrow{
                    width: 16px;
                }
            }
        }

   }
</style>