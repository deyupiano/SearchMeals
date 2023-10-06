import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import Gallery from '../views/Gallery.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'
import Blogs from '../views/Blogs.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Profile from '../views/Profile.vue'
import Admin from '../views/Admin.vue'


const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
        meta:{
          title:"Home"
        }
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
        meta:{
          title:"MealsByName"
        }
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
        meta:{
          title:"MealsByLetter"
        }
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
        meta:{
          title:"Ingredients"
        }
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
        meta:{
          title:"MealsByIngredient"
        }
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails,
        meta:{
          title:"MealDetails"
        }
      },
      {
        path: "/blogs",
        name: "blogs",
        component: Blogs,
        meta:{
          title:"Blogs"
        }
      },
      {
        path: "/about",
        name: "about",
        component: About,
        meta:{
          title:"About"
        }
      },
      {
        path: "/contact-us",
        name: "contact-us",
        component: ContactUs,
        meta:{
          title:"Contact Us"
        }
      },
      {
        path: "/gallery",
        name: "gallery",
        component: Gallery,
        meta:{
          title:"Gallery"
        }
      },
      {
        path: '/Login',
        name: 'login',
        component: Login,
        meta:{
          title:"Login"
        }
      },
      {
        path: '/Register',
        name: 'register',
        component: Register,
        meta:{
          title:"Register"
        }
      },
      {
        path: '/ForgotPassword',
        name: 'forgot-password',
        component: ForgotPassword,
        meta:{
          title:"Forgot Password"
        }
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta:{
          title:"Profile"
        }
      },
      {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta:{
          title:"Admin"
        }
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout
  }
  // {
  //   path: '/design-systems',
  //   name: 'Css Guide',
  //   component: () => import('../views/design-systems/design-systems.vue')
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: () => import('../views/dashboard/Dashboard.vue')
  // },
  // {
  //   path: '/logout',
  //   name: 'Logout',
  //   component: () => import(/* webpackChunkName: "logout" */ '../views/logout/Logout.vue')
  // },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: () => import(/* webpackChunkName: "logout" */ '../views/settings/Settings.vue')
  // }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((from, to, next) =>{
  document.title = `${from.meta.title} | CONTINENTAL FOODS`; 
  next();
})
export default router;
