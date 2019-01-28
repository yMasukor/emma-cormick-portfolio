<template>
  <div
    :class="[aspect, aspect ? 'fixed-aspect' : '' ]">
    <div class="fixed-aspect-inner">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedAspect',
  props: {
    aspect: {
      type: String,
      default: 'square'
    }
  }
}
</script>

<style scoped lang="scss">
// @import '../assets/scss/variables.scss';

@mixin aspect-ratio($width, $height) {
  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: ($height / $width) * 100%;
  }
  > .fixed-aspect-inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-color: $accent;

    /deep/ img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.sixteen-nine {
  @include aspect-ratio(16, 9);
}

.four-three {
  @include aspect-ratio(4, 3);
}

.three-four {
  @include aspect-ratio(3, 4);
}

.square {
  @include aspect-ratio(1, 1);
}
</style>
