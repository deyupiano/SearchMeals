<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Gallery</h1>
  </div>
  <!-- <Meals :events="events" /> -->

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
// import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";


const events = ref([]);


onMounted(async () => {
    // try {
    //   const { data } = await axiosClient.get(`get-random-meals`);
    //   debugger
    //   for (let i = 0; i < data.length; i++) {
    //     meals.value.push(data[i])
    //   }
    // } catch (error) {
    //   if (axiosClient.isAxiosError(error)) {
    //     handleAxiosError(error);
    //   } else {
    //     handleUnexpectedError(error);
    //   }
    // }
      
});
</script>
