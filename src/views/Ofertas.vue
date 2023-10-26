<script setup>
import { onMounted, ref } from 'vue';
import GamesService from '../services/GamesService';

const games = ref([]);

const getGameOffers = async () => (games.value = await GamesService.getPagedGamesOffers());

onMounted(getGameOffers);
</script>

<template>
  <div class="ofertas">
    <h1>Ofertas</h1>
  </div>
</template>

<style scoped>
.ofertas {
  width: 100%;
  padding: 2rem;
  background: var(--gradient-home-bg);
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
