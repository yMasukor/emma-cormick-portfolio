<template>
  <div class="wrapper" >
    <v-lazy-image
      v-if="intersectionOptions"
      :src="require(`../assets/images/${src}`)"
      :alt="alt"
      :intersection-options="intersectionOptions"
      class="image-element"
      @load.native="load"
      @intersect="intersect"/>
    <div 
      :class="[loaded ? 'loaded' : '']" 
      class="image-mask"/>
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
      console.log('loaded')
      this.loaded = true
      this.$emit('image-load')
    },
    intersect() {
      this.$emit('intersect')
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.image-mask {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #fff;
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
  transform-origin: 0% 0%;

  &.loaded {
    transform: scale3d(1, 0, 1);
  }
}
</style>
