<script setup>
import { computed } from 'vue';

const props = defineProps({
  game: {}
});
const gameDetails = props.game;
const gameImageUrl = `https://cdn.akamai.steamstatic.com/steam/apps/${gameDetails.steamAppID}/header.jpg`;

const discount = computed(() => {
  return gameDetails.discount >= 100 ? 'GRÁTIS' : '-' + Math.round(gameDetails.discount) + '%';
});
</script>
<template>
  <div class="game-card">
    <div class="default-image">
      <img :src="gameImageUrl" :alt="gameDetails.title" />
    </div>
    <div class="card-details">
      <div class="title">
        {{ gameDetails.title }}
      </div>
      <div class="promotion-details">
        <div class="details-btn">DETALHES</div>
        <div class="price-details flex-between">
          <div class="price">
            <p class="old-price">${{ gameDetails.normalPrice }}</p>
            <p class="new-price">${{ gameDetails.salePrice }}</p>
          </div>
          <div class="discount">{{ discount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.game-card {
  background-color: var(--dark-blue-bg);
  border-radius: 8px;
  height: 100%;
}
.default-image {
  min-height: 180px;
  display: flex;
}
.game-card img {
  height: 180px;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
}

.card-details {
  padding: 0rem 1rem;
  padding-bottom: 1rem;
}
.card-details .title {
  overflow: hidden;
  width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 24px;
}

.promotion-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
}
.details-btn {
  background-color: var(--pink-bg);
  padding: 4px 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
}
.price-details {
  gap: 12px;
}
.price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  line-height: 17px;
}
.price .old-price {
  font-size: 12px;
  text-decoration: line-through;
}
.price .new-price {
  font-size: 16px;
  font-weight: 700;
}
.discount {
  background-color: var(--green-bg);
  padding: 4px 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
}

@media (min-width: 600px) {
  .default-image {
    min-height: 250px;
  }
  .game-card img {
    height: 250px;
  }
}

@media (min-width: 1100px) {
  .default-image {
    min-height: 200px;
  }
  .game-card img {
    height: 200px;
  }
  .details-btn {
    font-size: 20px;
  }
  .price .old-price {
    font-size: 14px;
  }
  .price .new-price {
    font-size: 20px;
  }
  .discount {
    font-size: 20px;
  }
}
@media (min-width: 1400px) {
  .default-image {
    min-height: 250px;
  }
  .game-card img {
    height: 250px;
  }
}
</style>
