<script setup lang="ts">
import InputForm from './components/InputForm.vue';

function clickAlert() {
  alert('メニューボタンをクリックしました！');
}
</script>

<template>
  <v-app>
    <header>
      <v-app-bar>
        <v-app-bar-nav-icon @click="clickAlert"></v-app-bar-nav-icon>
        <v-app-bar-title>Vue.js Sample Page</v-app-bar-title>
      </v-app-bar>
    </header>
    <v-main>
      <input-form></input-form>
    </v-main>
    <footer></footer>
  </v-app>
</template>

<style scoped></style>
