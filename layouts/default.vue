<template>
  <div>
    <header>
      <div class="horizontal row">
        <nuxt-link :to="{name: 'index'}">
          <h1 class="cell">Emma<br>Cormick</h1>
        </nuxt-link>
      </div>
    </header>
    <nuxt/>
    <footer class="accent">
      <div class="horizontal row">
        <a
          class="cell"
          href="">Download Resumè</a>
        <a
          class="cell"
          href="">hi@emmacormick.com</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
header {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
    color: $accent;
  }
}

footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  .horizontal {
    justify-content: space-between;
  }

  a {
    font-family: 'IBM Plex Serif', serif;
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
</style>
