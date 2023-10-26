<script setup>
import { onMounted, ref } from 'vue';
import GamesService from '../services/GamesService';

const games = ref([]);

const getGameOffers = async () => (games.value = await GamesService.getPagedGamesOffers());

onMounted(getGameOffers);
</script>

<template>
  <div class="ofertas">
    <h1 class="title">Ofertas</h1>
  </div>
</template>

<style scoped>
.ofertas {
  width: 100%;
  padding: 1rem;
  background: var(--gradient-home-bg);
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.title {
  font-size: 1.5rem;
}

@media (min-width: 1000px) {
  .ofertas {
    justify-content: start;
    padding: 2rem 5rem;
  }
  .title {
    font-size: 36px;
  }
}
</style>
