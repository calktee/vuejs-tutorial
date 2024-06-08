<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBlog = () => {
  router.push('/blog');
}
</script>

<template>
  <div class="wrap">
    <TheHeader />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <span @click="goBlog">Blog</span>
    </nav>
    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style>
@import 'assets/css/destyle.css';
</style>