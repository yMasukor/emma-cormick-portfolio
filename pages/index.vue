<template>
  <div id="page">
    <header
      id="header"
      class="h-padded">
      <h1 id="logo">Emma<br>Cormick</h1>
      <nav>
        <a href="mailto:hi@emmacormick.com">hi@emmacormick.com</a>
        <a
          href="/Emma Cormick CV 2019.pdf"
          target="_blank">View Resumé</a>
      </nav>
    </header>
    <div id="content">
      <section>
        <div class="text-block">
          <p class="lead">✏️ Interior &amp; spatial designer.<br>🇦🇺 Based in Sydney, Australia.<br>💁‍♀️ Currently available for hire.</p>
        </div>
      </section>

      <section>
        <figure>
          <fixed-aspect
            class="hoverable xs-full"
            aspect="sixteen-nine">
            <lazy-image
              :src="'image-1.png'"
              alt="3D Render of Meraki CISCO Office space"/>
          </fixed-aspect>
          <fixed-aspect
            class="hoverable xs-two-thirds offset-xs-third offset-top"
            aspect="four-three">
            <lazy-image
              :src="'image-2.png'"
              alt="Isometric view of Meraki CISCO Office space floorplace"/>
          </fixed-aspect>
          <figcaption class="xs-two-thirds offset-xs-third">Meraki CISCO – Sydney Concept</figcaption>
        </figure>
      </section>

      <section>
        <div class="text-block">
          <h2>I create thoughtful spaces for humans.</h2>
          <p>I believe everyone deserves well designed spaces.</p>
          <p>I design interiors which are personal, considered and thoughtful, both in concept and in detail.</p>
          <p>I aim to understand people’s unique and individual needs, and  create beautiful, functional spaces to live and work</p>
        </div>
      </section>

      <section>
        <figure>
          <fixed-aspect
            class="hoverable xs-two-thirds m-third offset-xs-third"
            aspect="four-three">
            <lazy-image
              :src="'image-3.png'"
              alt="Floorplans for The Third Space, Brisbane"/>
          </fixed-aspect>
          <fixed-aspect
            class="hoverable xs-full offset-top"
            aspect="four-three">
            <lazy-image
              :src="'image-4.png'"
              alt="Documentation of a custom corner bench"/>
          </fixed-aspect>
          <figcaption class="xs-full">The Third Space – Brisbane</figcaption>
        </figure>
      </section>

      <section>
        <div class="text-block">
          <h2>Skills</h2>
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
      </section>

      <section>
        <div class="text-block">
          <h2>Tools</h2>
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
      </section>

      <section>
        <figure>
          <fixed-aspect
            class="hoverable xs-full"
            aspect="four-three">
            <lazy-image
              :src="'image-5.png'"
              alt="3D Render of the Cubby House"/>
          </fixed-aspect>
          <fixed-aspect
            class="hoverable xs-two-thirds m-third offset-xs-third offset-top"
            aspect="four-three">
            <lazy-image
              :src="'image-6.png'"
              alt="In situ mockup of the Cubby House"/>
          </fixed-aspect>
          <figcaption class="offset-xs-third xs-two-thirds">Cubby House – Concept</figcaption>
        </figure>
      </section>

      <section id="cta">
        <div
          class="h-padded">
          <a
            id="email"
            href="mailto:hi@emmacormick.com">hi@emmacormick.com</a>
          <p>👋 Get in touch for a chat, or for complete examples of my work</p>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import FixedAspect from '~/components/FixedAspect.vue'
import LazyImage from '~/components/LazyImage.vue'
export default {
  components: {
    FixedAspect,
    LazyImage
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/layout.scss';

#page {
  padding-top: 1.5rem;

  @media (min-width: $small) {
    padding-top: 2rem;
  }

  @media (min-width: $mid) {
    padding-top: 2rem;
  }

  @media (min-width: $big) {
    padding-top: 3rem;
  }
}

header {
  @extend .v-padded;
}

section {
  @extend .v-padded;
}

figcaption {
  @extend .h-padded;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

a {
  display: block;
  color: inherit;
  &:hover {
    opacity: 0.8;
  }

  &:visited {
    color: inherit;
  }
}

.offset-top {
  margin-top: -2rem;
}

.text-block {
  @extend .h-padded;
  @media (min-width: $big) {
    width: 66.66%;
  }
  @media (min-width: $max) {
    width: 50%;
    margin-left: 33.33%;
  }
}

#cta {
  height: 100vh;
  background-color: $primary;
  color: $background;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 25vh;

  #email {
    font-family: 'IBM Plex Serif', serif;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
    font-weight: bold;

    @media (min-width: $max) {
      font-size: 2.5rem;
      line-height: 2rem;
    }
  }
}

@media (min-width: $mid) {
  #header {
    position: fixed;
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    top: 0px;
    left: 0px;
  }

  #logo {
    transform-origin: 0% 0%;
    transform: rotateZ(-90deg) translate3d(-6rem, -8px, 0px);
  }

  #content {
    margin-left: 40%;
  }
}

@media (min-width: $max) {
  #header {
    width: 30%;
  }

  #content {
    margin-left: 30%;
  }
}

// .hoverable {
//   perspective: 500px;
//   transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
//   transform: rotateX(-12deg) rotateY(-6deg) rotateZ(0deg);

//   &:nth-child(2n + 1) {
//     transform: rotateX(12deg) rotateY(-6deg) rotateZ(-0deg);
//   }

//   &:hover {
//     transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
//     transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
//   }
// }
</style>
