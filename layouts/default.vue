<template>
  <div>
    <header>
      <div class="horizontal row">

        <transition
          appear
          name="build-up">
          <nuxt-link :to="{name: 'index'}">
            <h1 class="cell">Emma<br>Cormick</h1>
          </nuxt-link>
        </transition>
      </div>
    </header>
    <nuxt/>

    <transition
      appear
      name="build-up">
      <footer class="accent">
        <div class="horizontal row">
          <a
            class="cell"
            target="_blank"
            href="/Emma Cormick CV 2019.pdf">Download Resumè</a>
          <a
            class="cell"
            href="mailto:hi@emmacormick.com">hi@emmacormick.com</a>
        </div>
      </footer>
    </transition>
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
  z-index: 999;

  a {
    text-decoration: none;
    color: $accent;
    transition: color 600ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
      transition: color 300s cubic-bezier(0.19, 1, 0.22, 1);
      color: #ff6389;
    }
  }

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  z-index: 999;

  .horizontal {
    justify-content: space-between;
  }

  a {
    transition: color 600ms cubic-bezier(0.19, 1, 0.22, 1);
    font-family: 'IBM Plex Serif', serif;
    font-size: 1rem;
    line-height: 1.5rem;

    &:hover {
      transition: color 300ms cubic-bezier(0.19, 1, 0.22, 1);
      color: #ff6389;
    }
  }
}
</style>
