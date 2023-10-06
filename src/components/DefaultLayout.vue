<!-- <template>
  <navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script> -->

<template>
  <Navbar v-if="!navigation" />
  <main>
    <div>
      <router-view />
    </div>
  </main>
  <Footer v-if="!navigation"  />
</template>

<script>
    // import firebase from 'firebase/app';
    // import 'firebase/auth';
import Navbar from "../components/Navbar.vue";
import Footer from '../components/Footer.vue';
export default {
  name: "app",
   components: {Navbar,Footer},
  data() {
    return {
      navigation: null,
    };
  },
  created() {

  },
  mounted() {},
  methods: {

  },

};
</script>


