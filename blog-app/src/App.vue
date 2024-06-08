<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="wrap">
    <TheHeader />
    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style>
@import 'assets/css/destyle.css';
</style>