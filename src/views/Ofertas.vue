<script setup>
import { onMounted, ref, watch } from 'vue';
import GamesService from '../services/GamesService';
import { searchIcon, arrowDownIcon } from '../utils/constants';
import GameCard from '../components/GameCard.vue';

const seachIcon = ref(searchIcon);

const games = ref('');
const getGameOffers = async (orderBy, getAll = false, gameSearched = '') => {
  games.value = await GamesService.getPagedGamesOffers(gameSearched, orderBy, getAll);
  scrollTo(0, 0);
};

const gameSearched = ref('');

watch(gameSearched, (value, oldvalue) => {
  getGameOffers(orderBySelected.value, false, value);
});

const orderByList = ref([
  { id: 1, description: '% de Desconto' },
  { id: 2, description: 'Maior preço' },
  { id: 3, description: 'Menor preço' },
  { id: 4, description: 'Título' }
]);

const orderBySelected = ref(1);

watch(orderBySelected, (value, oldvalue) => {
  getGameOffers(value, false, gameSearched.value);
});

const getAllGames = () => {
  getGameOffers(orderBySelected.value, true, gameSearched.value);
};

onMounted(() => getGameOffers(orderBySelected.value, false, gameSearched.value));
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
        <input type="text" placeholder="Procurar" v-model="gameSearched" />
      </div>
      <div class="order-by">
        <p>Ordenar por:</p>
        <div class="order-by-list shadow">
          <select name="select" v-model="orderBySelected">
            <option :value="orderBy.id" v-for="orderBy in orderByList" :key="orderBy.id">
              {{ orderBy.description }}
            </option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <!--! Font Awesome Free 6.4.2 by fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path :d="arrowDownIcon" />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="games.length" class="games">
      <div v-for="game in games" :key="game.gameID" class="game-card shadow">
        <GameCard :game="game" />
      </div>
    </div>
    <div v-else class="no-content-message">
      <h1>{{ 'Não encontramos nenhum jogo com esse título :(' }}</h1>
    </div>
    <button class="load-more shadow" v-if="games.length == 12" @click="getAllGames">
      Carregar mais
    </button>
  </div>
</template>

<style scoped>
.ofertas {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(90deg, #240b41e6 0%, #c70160 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title {
  font-size: 1.5rem;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: end;
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
.menu .search svg {
  fill: var(--white-text);
  font-size: 16px;
}

.search input {
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--white-text);
  font-size: 15px;
  margin-left: 1.5rem;
}
.order-by {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 10px;
}
.order-by p {
  font-size: 14px;
  font-weight: 700;
}
.order-by-list {
  width: 100%;
  background-color: var(--dark-blue-bg);
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order-by-list select {
  width: 100%;
  height: 50px;
  background-color: var(--dark-blue-bg);
  border: none;
  outline: none;
  color: var(--white-text);
  padding: 0 1rem;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 15px;
}
.order-by svg {
  fill: var(--white-text);
  font-size: 16px;
  transform: translateX(-1rem);
}
.games {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem 0;
  justify-items: center;
}

.game-card {
  width: 100%;
  border-radius: 8px;
}

.load-more {
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 14px;
  border-radius: 8px;
  background-color: var(--dark-blue-bg);
  color: var(--white-text);
  cursor: pointer;
  border: none;
}

.no-content-message {
  width: 100%;
  text-align: center;
  margin: 5rem 0;
}

@media (min-width: 900px) {
  .ofertas {
    align-items: start;
    padding: 2rem 5rem;
    background: linear-gradient(60deg, #130b41f5 0%, #c70160 100%);
  }
  .title {
    font-size: 36px;
  }

  .menu .search {
    width: 30%;
  }
  .order-by {
    width: 100%;
    flex-direction: row;
    gap: 1rem;
  }
  .order-by p {
    font-size: 18px;
  }
  .order-by-list {
    width: 20%;
  }
  .games {
    grid-template-columns: 1fr 1fr;
  }
  .load-more {
    width: 500px;
    margin: auto;
  }
}
@media (min-width: 1300px) {
  .games {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
