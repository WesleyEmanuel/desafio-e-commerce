<script setup></script>

<template>
  <div class="nav-bar">
    <img src="../assets/images/game-tracker-logo.png" alt="game tracker logo" class="logo" />
    <p>
      Game
      <b class="bold">Tracker</b>
    </p>
  </div>
</template>

<style scoped>
.nav-bar {
  background-color: var(--dark-blue-bg);
  height: 50px;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px;
}
.bold {
  font-weight: 700;
}
.logo {
  width: 31.66px;
}

@media (min-width: 1000px) {
  .nav-bar {
    justify-content: start;
    padding: 0 4rem;
  }
}
</style>
