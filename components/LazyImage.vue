<template>
  <div class="background">
    <!-- <img :src="require(`../assets/images/${src}`)"> -->

    <v-lazy-image
      v-if="intersectionOptions"
      :src="require(`../assets/images/${src}?sizes[]=1200 `).src"
      :srcset="require(`../assets/images/${src}?sizes[]=400,sizes[]=800,sizes[]=1200,sizes[]=1800,sizes[]=2400 `).srcSet"
      :alt="alt"
      :intersection-options="intersectionOptions"
      class="image-element"
      @load.native="load"
      @intersect="intersect"/>
  </div>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loaded: false,
      intersectionOptions: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.intersectionOptions = {
        // root: this.$root.currentScrollingRegion,
        rootMargin: '0%'
      }
    })
  },
  methods: {
    load(e) {
      e.stopPropagation()
      this.$emit('image-load')
    },
    intersect() {
      this.$emit('intersect')
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translate3d(0, 2rem, 0);
  background-color: #fff7fc;
}

img.v-lazy-image-loaded {
  opacity: 1;
  transform: translate3d(0, 0rem, 0);
}
</style>
