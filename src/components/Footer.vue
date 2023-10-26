<script setup></script>
<template>
  <footer class="footer">
    <img src="../assets/images/game-tracker-logo.png" alt="Game Tracker Logo" class="logo" />
    <p class="copyright">
      © 2021, Game Tracker Inc. Todos os direitos reservados. Nulla facilisi. Etiam sagittis congue
      tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
      egestas. Suspendisse eu velit et ante luctus egestas. Aenean sed nisi tellus. Duis non ornare
      libero. Quisque suscipit maximus nisi, in gravida felis. Cras ornare mauris ac nisi congue, ut
      condimentum sem tincidunt. Phasellus semper tellus malesuada turpis gravida cursus. Duis nec
      eleifend nunc, vitae finibus elit. Aliquam eget diam vitae purus suscipit viverra.
    </p>
    <div class="links">
      <a href="">Termos de Serviço</a>
      <a href="">Política de Privacidade</a>
      <a href="">Trabalhe Conosco</a>
      <a href="">Contato</a>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  background-color: var(--dark-blue-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;
  gap: 1rem;
}

.logo {
  width: 31.66px;
}

.copyright {
  font-size: 14px;
  text-align: center;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.links a {
  font-weight: 700;
}

@media (min-width: 1000px) {
  .footer {
    padding: 3rem 12rem;
    gap: 2rem;
  }

  .copyright {
    font-size: 14px;
    text-align: start;
  }

  .links {
    flex-direction: row;
    align-self: start;
  }
}
</style>
