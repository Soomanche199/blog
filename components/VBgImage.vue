<template>
  <div class="lozad" :data-background-image="getImage"></div>
</template>

<script>
import lozad from 'lozad'

export default {
  name: 'VBgImage',
  props: {
    src: {
      type: String,
      default: () => {},
    },
  },
  computed: {
    getImage() {
      return require(`~/assets/images/${this.src}`)
    },
  },
  mounted() {
    const observer = lozad()
    observer.observe()
  },
}
</script>
