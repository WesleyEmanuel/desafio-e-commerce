<script setup>
import { onMounted, ref } from 'vue';
import GamesService from '../services/GamesService';
import { searchIcon } from '../utils/constants';
import GameCard from '../components/GameCard.vue';

const seachIcon = ref(searchIcon);

const games = ref([]);
const getGameOffers = async () => (games.value = await GamesService.getPagedGamesOffers());

const orderByList = ref([
  { id: 1, description: '% de Desconto' },
  { id: 2, description: 'Maior preço' },
  { id: 3, description: 'Menor preço' },
  { id: 4, description: 'Título' }
]);

const orderBySelected = ref(1);

onMounted(getGameOffers);
</script>

<template>
  <div class="ofertas">
    <h1 class="title">Ofertas</h1>
    <div class="menu">
      <div class="search shadow">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <!--! Font Awesome Free 6.4.2 by fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path :d="seachIcon" />
        </svg>
        <input type="text" placeholder="Procurar" />
      </div>

      <select name="select" class="order-by-list shadow" v-model="orderBySelected">
        <option :value="orderBy.id" v-for="orderBy in orderByList" :key="orderBy.id">
          {{ orderBy.description }}
        </option>
      </select>
    </div>
    <div class="games">
      <div v-for="game in games" :key="game.gameID" class="game-card">
        <GameCard :game="game" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ofertas {
  width: 100%;
  padding: 1rem;
  background: var(--gradient-home-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title {
  font-size: 1.5rem;
}

svg {
  fill: var(--white-text);
  font-size: 16px;
  position: absolute;
}
.menu {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

.menu .search {
  width: 50%;
  background-color: var(--dark-blue-bg);
  height: 50px;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}

.search input {
  background-color: transparent;
  outline: none;
  color: var(--white-text);
  font-size: 15px;
  border: none;
  margin-left: 1.5rem;
}

.order-by-list {
  background-color: var(--dark-blue-bg);
  border: none;
  outline: none;
  color: var(--white-text);
  height: 50px;
  border-radius: 8px;
  padding: 0 1rem;
  width: 50%;
  font-size: 15px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.games {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 3rem 0;
  justify-items: center;
}

.game-card {
  width: 100%;
}

@media (min-width: 1100px) {
  .ofertas {
    align-items: start;
    padding: 2rem 5rem;
  }
  .title {
    font-size: 36px;
  }

  .menu .search {
    width: 30%;
  }
  .order-by-list {
    width: 20%;
  }
  .games {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1550px) {
  .games {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
