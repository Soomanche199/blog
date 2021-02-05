<template>
  <figure class="image">
    <img
      v-if="suffix !== 'svg'"
      class="lozad"
      :src="getImage.placeholder"
      :data-src="getImage.src"
      :alt="alt"
    />
    <img
      v-else
      class="lozad"
      :src="getImage.placeholder"
      :data-src="getImage"
      :alt="alt"
    />
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
  computed: {
    getImage() {
      return require(`~/assets/images/${this.src}`)
    },
    suffix() {
      return this.src.split('.').pop()
    },
  },
  mounted() {
    const observer = lozad()
    observer.observe()
  },
}
</script>

<style>
img {
  width: 100%;
  transition: all ease 0.3s;
  filter: blur(15px);

  &[data-loaded='true'] {
    filter: unset;
  }
}

.image__caption {
  margin-top: 10px;
}
</style>
