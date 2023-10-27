<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  game: {}
});

const gameImageUrl = `https://cdn.akamai.steamstatic.com/steam/apps/${props.game.steamAppID}/header.jpg`;
onMounted(() => console.log(gameImageUrl));
</script>
<template>
  <div class="game-card">
    <img :src="gameImageUrl" :alt="game.title" />
    <div class="card-details"></div>
  </div>
</template>
<style scoped>
.game-card {
  background-color: var(--dark-blue-bg);
  border-radius: 8px;
}
.game-card img {
  width: 100%;
}

.card-details {
  height: 50px;
}
</style>
