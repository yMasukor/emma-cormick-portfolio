<template>
  <div id="page">
    <section class="no-bottom-padding">
      <div class="horizontal row">
        <div class="cell xs-full m-third">
          <h1 class="no-top-margin">{{ work.name }}</h1>
          <p class="small">{{ work.status }}</p>
        </div>
        <div class="cell lead xs-full m-two-thirds l-half">
          <p class="no-top-margin">{{ work.desc }}</p>
        </div>
      </div>
    </section>

    <section
      v-for="(block, index) in work.blocks"
      :key="index"
      :id="`block-${index}`"
      class="no-bottom-padding">
      <!-- IMAGE -->
      <div
        v-if="block.type === 'image'"
        :class="[index % 2 === 0 ? '' : 'reverse']"
        class="row horizontal">
        <div
          :class="block.width"
          class="cell image">
          <fixed-aspect :aspect="block.aspect">
            <lazy-image :src="block.src"/>
          </fixed-aspect>
          <p class="caption">{{ block.caption }}</p>
        </div>
      </div>
      <!-- TEXT -->
      <div
        v-if="block.type === 'text'"
        :class="[index % 2 === 0 ? '' : 'reverse']"
        class="row horizontal">
        <div
          class="cell text m-half l-third">
          <h2>{{ block.title }}</h2>
          <p>{{ block.copy }}</p>
        </div>
      </div>
    </section>

    <section 
      v-if="next" 
      class="accent next">
      <nuxt-link
        :to="{name: `works-${next.id}`}"
        class="horizontal row">
        <div class="cell xs-full m-third">
          <p class="no-top-margin small">Next</p>
        </div>
        <div class="cell lead xs-full m-two-thirds l-half">
          <h1 class="no-top-margin">{{ next.name }}</h1>
        </div>
      </nuxt-link>
    </section>

  </div>
</template>

<script>
import works from '~/data/works.json'

import FixedAspect from '~/components/FixedAspect.vue'
import LazyImage from '~/components/LazyImage.vue'
export default {
  components: {
    FixedAspect,
    LazyImage
  },
  props: {
    work: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      works: works
    }
  },
  computed: {
    next() {
      return this.works.find(work => work.id === this.work.next)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/layout.scss';

section {
  padding-top: 33.33vh;
  padding-bottom: 33.33vh;

  &.no-bottom-padding {
    padding-bottom: 0px;
  }
}

.reverse .image {
  text-align: right;
  .caption {
    float: right;
  }
}

.image {
  .caption {
    max-width: 416px;
  }
}

.text {
  // @media (min-width: $mid) {
  //   margin-left: 33.33%;
  // }
}

.next {
  margin-top: 33.33vh;
}

.next a {
  text-decoration: none;
  h1 {
    text-decoration: underline;
  }
}
</style>
