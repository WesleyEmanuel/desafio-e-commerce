<script>
import { defineComponent, onMounted, ref } from 'vue';
import GamesService from '../services/GamesService';

export default defineComponent({
  setup() {
    const games = ref([]);

    const getGames = () => {
      games.value = GamesService.getPagedStoreGames();
    };

    onMounted(getGames);

    return { games };
  }
});
</script>

<template>
  <main class="home-main">
    <p>{{ games }}</p>
  </main>
</template>

<style>
.home-main {
  background: var(--gradient-home-bg);
  width: 100vw;
  height: 100vh;
}
</style>
