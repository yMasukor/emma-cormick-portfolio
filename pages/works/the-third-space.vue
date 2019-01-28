<template>
  <work :work="data"/>
</template>

<script>
import data from '~/data/the-third-space.json'

import Work from '~/components/Work.vue'

export default {
  components: {
    Work
  },
  data() {
    return {
      data: data
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
