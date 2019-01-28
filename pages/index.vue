<template>
  <div id="page">
    <section class="no-bottom-padding ">
      <div class="horizontal row">
        <div class="cell m-third">
          <p class="small no-top-margin">
            Interior &amp; spatial designer.<br>
            Based in Sydney, Australia.<br>
            Currently available for hire.</p>
        </div>
        <div class="cell lead m-two-thirds l-half">
          <p class="no-top-margin">I create thoughtful spaces for humans.</p>
          <p>I believe everyone deserves well designed spaces.</p>
          <p>I design interiors which are personal, considered and thoughtful, both in concept and in detail.</p>
          <p>I aim to understand people’s unique and individual needs, and  create beautiful, functional spaces to live and work</p>
        </div>
      </div>
    </section>


    <section
      v-for="(work, index) in works.filter(item => !item.hide)"
      :key="work.id"
      :id="`study-${index}`"
      class="no-bottom-padding">
      <div
        :class="[index % 2 === 0 ? 'reverse' : '']"
        class="horizontal row">
        <nuxt-link
          :class="work.width"
          :to="{name: `works-${work.id}`}"
          class="cell work">
          <h2>{{ work.name }}</h2>
          <fixed-aspect :aspect="work.thumb.aspect">
            <lazy-image :src="work.thumb.src"/>
          </fixed-aspect>
          <p class="caption">{{ work.desc }}</p>
        </nuxt-link>
      </div>
    </section>

    <section class="skills accent">
      <div class="horizontal row">
        <div class="cell xs-full m-third">
          <h2>I can help with</h2>
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
export default {
  components: {
    FixedAspect,
    LazyImage
  },
  data() {
    return {
      works: works
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
  .caption {
    max-width: 416px;
  }
}

.skills {
  margin-top: 33.33vh;
}
</style>
