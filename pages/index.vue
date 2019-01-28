<template>
  <div
    id="page"
    ref="page"
    class="inverse">
    <!-- <parallax class="scribbles"> -->
    <transition
      appear
      name="build-up">
      <img
        id="scribbles"
        :src="require(`../assets/images/scribbles.svg`)"
        :style="parallaxStyle"
        width="100%"
        height="auto">
    </transition>
    <!-- </parallax> -->
    <section class="no-bottom-padding inverse">
      <div class="horizontal row">
        <div class="cell m-third header-aside">
          <transition
            appear
            name="build-up">
            <p
              :style="{transitionDelay:`${(1)*100}ms`}"
              class="small no-top-margin">
              Interior &amp; spatial designer.<br>
              Based in Sydney, Australia.<br>
              Currently available for hire.</p>
          </transition>
        </div>
        <div class="cell lead m-two-thirds l-half">
          <transition-group
            tag="div"
            appear
            name="build-up">
            <p
              :style="{transitionDelay:`${(2)*100}ms`}"
              :key="1"
              class="no-top-margin">I create thoughtful spaces for humans.</p>
            <p
              :style="{transitionDelay:`${(3)*100}ms`}"
              :key="2">I believe everyone deserves well designed spaces.</p>
            <p
              :style="{transitionDelay:`${(4)*100}ms`}"
              :key="3">I design interiors which are personal, considered and thoughtful, both in concept and in detail.</p>
            <p
              :style="{transitionDelay:`${(5)*100}ms`}"
              :key="4">I aim to understand people’s unique and individual needs, and  create beautiful, functional spaces to live and work</p>
          </transition-group>
        </div>
      </div>
    </section>

    <section
      v-for="(work, index) in works.filter(item => !item.hide)"
      :key="work.id"
      :id="`study-${index}`"
      class="no-bottom-padding inverse">
      <div
        :class="[index % 2 === 0 ? 'reverse' : '']"
        class="horizontal row">
        <nuxt-link
          :class="work.width"
          :to="{name: `works-${work.id}`}"
          class="cell work">
          <h2>{{ work.name }}</h2>
          <fixed-aspect
            :aspect="work.thumb.aspect"
            class="image-wrapper">
            <lazy-image
              :src="work.thumb.src"
              class="image"/>
            <div class="hover-mask"/>
          </fixed-aspect>
          <p class="caption">{{ work.desc }}</p>
        </nuxt-link>
      </div>
    </section>

    <section class="skills accent">
      <div class="horizontal row">
        <div class="cell xs-full m-third">
          <h2 class="no-top-margin">I can help with</h2>
        </div>
        <div class="cell xs-full s-half m-third">
          <ul>
            <li>Conceptual Design & Development</li>
            <li>Spatial Planning</li>
            <li>CAD Documentation & Drafting</li>
            <li>Scheduling</li>
            <li>3D Modeling, Texturing, Lighting</li>
            <li>Rendering & Image Editing</li>
            <li>Presentations, Web & Print Media</li>
            <li>Model Making & 3D Printing</li>
            <li>Styling & Interior Photography</li>
          </ul>
        </div>
        <div class="cell xs-full s-half m-third">
          <ul>
            <li>Revit</li>
            <li>AutoCAD</li>
            <li>SketchUp</li>
            <li>ArchiCAD</li>
            <li>3Ds Max</li>
            <li>Adobe Creative Suite</li>
            <li>Autodesk Maya</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import works from '~/data/works.json'

import FixedAspect from '~/components/FixedAspect.vue'
import LazyImage from '~/components/LazyImage.vue'
import Parallax from 'vue-parallaxy'
export default {
  components: {
    FixedAspect,
    LazyImage,
    Parallax
  },
  data() {
    return {
      works: works,
      ticking: false,
      scrollPos: 0,
      pageHeight: 0
    }
  },
  computed: {
    parallaxStyle() {
      return {
        transform: `translate3d(0, -${((this.scrollPos * 0.5) /
          this.pageHeight) *
          100}%, 0)`
      }
    }
  },

  mounted() {
    console.log('home mounted')

    this.pageHeight = this.$refs.page.clientHeight - window.innerHeight
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.scrollPos = window.scrollY
          this.ticking = false
        })
        this.ticking = true
      }
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

.reverse .work {
  text-align: right;
  .caption {
    float: right;
  }
}

.work {
  text-decoration: none;
  transition: color 2s cubic-bezier(0.19, 1, 0.22, 1);

  h2 {
    text-decoration: underline;
  }

  .caption {
    max-width: 416px;
  }

  .image-wrapper {
    overflow: hidden;
    background-color: $accent;
  }

  .hover-mask {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: $accent;
    transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
    transform-origin: 0% 0%;
    transform: scale3d(1, 0, 1);
    mix-blend-mode: screen;
    opacity: 0.7;
  }

  .image {
    transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
    transform: translate3d(0, 0rem, 0);
  }

  &:hover {
    transition: color 1s cubic-bezier(0.19, 1, 0.22, 1);
    color: $accent;
    .hover-mask {
      transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
      transform-origin: 0% 100%;
      transform: scale3d(1, 1, 1);
    }

    .image {
      transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
      transform: translate3d(0, -2rem, 0);
    }
  }
}

.skills {
  margin-top: 33.33vh;
}

#scribbles {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 0;
  // transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.header-aside{
  margin-bottom: 2rem;
}
</style>
