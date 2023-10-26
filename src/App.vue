<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import FooterApp from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterApp />
</template>

<style scoped></style>
