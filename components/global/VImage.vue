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
      return require(`~/assets/images${this.src}`)
    },
    style() {
      return {
        width: `${this.getImage.width}px`,
        aspectRatio: `${this.getImage.width}/${this.getImage.height}`,
      }
    },
  },
  mounted() {
    const observer = lozad()
    observer.observe()
  },
}
</script>

<style>
.image {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
img.lozad {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  vertical-align: middle;
  background-color: #95a4b7;

  & data[loaded='true'] {
    background-color: transparent;
  }
}

.image__caption {
  margin-top: 10px;
}
</style>
