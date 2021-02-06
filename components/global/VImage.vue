<template>
  <figure class="image">
    <img class="lozad" :style="style" :data-src="getImage" :alt="alt" />
    <figcaption v-if="caption" class="image__caption">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script>
import lozad from 'lozad'

export default {
  name: 'VImage',
  props: {
    caption: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    loading: true,
  }),
  computed: {
    getImage() {
      return require(`~/assets/images/${this.src}`)
    },
    aspectRatio() {
      if (!this.getImage.width || !this.getImage.height) {
        return null
      }

      return (this.getImage.height / this.getImage.width) * 100
    },
    style() {
      const style = {}

      if (this.getImage.width) {
        style.width = `${this.getImage.width}px`
      }

      const applyAspectRatio = this.loading && this.aspectRatio
      if (applyAspectRatio) {
        style.height = 0
        style.paddingTop = `${this.aspectRatio}%`
      }

      return style
    },
  },
  mounted() {
    const selector = this.$el.querySelector('.lozad')
    const observer = lozad(selector, {
      loaded: (el) => {
        this.loading = false
      },
    })
    observer.observe()
  },
}
</script>

<style>
img.lozad {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  vertical-align: middle;
  background-color: #95a4b7;
}

.image__caption {
  margin-top: 10px;
}
</style>
