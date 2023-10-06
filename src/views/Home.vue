<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
  <div>
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
        <div class="container">
            <h3>View More Recent Blogs</h3>
            <div class="blog-cards">
                <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" /> 
            </div>
        </div>
    </div>
    <div v-if="!user" class="updates">
        <div class="container">
            <h2>never miss a post. Register for your free account today!</h2>
            <router-link class="router-button" to="#">
                Register For (Continental Food) Blog <img class="arrow arrow-light" src="../assets/Icons/arrow-right-light.svg" />
            </router-link>
        </div>
    </div>
</div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard.vue';
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";


const meals = ref([]);

// onMounted(async () => {
//   for (let i = 0; i < meals.length; i++) {
//     axiosClient
//       .get(`get-all-meals`)
//       //.then(({ data }) => meals.value.push(data.meals[0]));
//       .then(({ data }) => meals.value.push(data[i]));
//   }
// });

onMounted(async () => {
    try {
      const { data } = await axiosClient.get(`meals/random`);
      debugger
      //const { data } = await axiosClient.get(`get-random-meals`);
      for (let i = 0; i < data.length; i++) {
        meals.value.push(data[i])
      }
    } catch (error) {
      if (axiosClient.isAxiosError(error)) {
        handleAxiosError(error);
      } else {
        handleUnexpectedError(error);
      }
    }
      
});
</script>
<script>
export default {
    components: {BlogPost, BlogCard},
    data() {
        return {
            welcomeScreen:{
                title: 'Welcome!',
                blogPost: 'The recognition that the church of the Lord Jesus Christ is a treasure and one that is very precious and dear to His heart. The recognition that the church of Jesus is the most important institution on earth and should be most cared for.The deep conviction that promoting and enhancing her effectiveness in ministering the Gospel of Jesus Christ is a very important and worthwhile task anyone can be engaged in.',
                welcomeScreen: true,
                photo:'coding'
            },
            sampleBlogPost:[
                {
                    title:'This is the first blog post updated',
                    blogHTML:'First blog post content',
                    blogCoverPhoto:'beautiful-stories'
                },
                {
                    title:'This is the second blog post',
                    blogHTML:'Second blog post content',
                    blogCoverPhoto:'designed-for-everyone'
                },
            ],
        };
    },
    computed:{
        sampleBlogCards (){
          let cards =  this.$store.state.sampleBlogCards
          return cards
        },
        user(){
            debugger
        return this.$store.state.user;
        }
    },

}
</script>
<style lang="scss" scoped>

#app{
    width: 1024px;
    margin: 60px auto;
}

.blog-card-wrap{
    h3{
        font-size: 28px;
        font-weight: 300;
        margin-bottom:32px;        
    }
}
.updates{
    .container{
        padding: 100px 25px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 800px) {
            padding: 125px 25px;
            flex-direction: row;
        }
        .router-button{
            display: flex;
            font-size: 14px;
            text-decoration: none;
            @media (min-width: 800px) {
                margin-left: auto;
            }
        }
        h2{
            font-weight: 300;
            font-size: 32px;
            max-width: 425px;
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            @media (min-width: 800px) {
                text-align: initial;
                font-size: 40px;
                
            }
        }
    }
}
</style>

