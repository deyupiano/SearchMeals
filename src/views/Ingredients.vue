<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >  
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
       <p>{{ ingredient.strDescription }}</p>
      </a>
    </div>

    <!-- <router-link 
      :to="{
            name: 'byIngredient',
            params: { ingredient: ingredient.idIngredient },
        }" 
      v-for="ingredient of ingredients" 
      :key="ingredient.id" 
      class="block bg-white rounded p-3 mb-3"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
       <p>{{ ingredient.strDescription }}</p>
    </router-link> -->
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  let fiteredData = ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
  debugger
  return fiteredData;
});

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient)
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get(`ingredients`).then(({ data }) => {
    ingredients.value = data;
    debugger
  });
});
</script>
