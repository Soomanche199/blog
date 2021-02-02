<template>
  <figure class="image">
    <img :src="getSrc()" class="image__img" alt="" />
    <figcaption v-if="caption" class="image__caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'VImage',
  props: {
    caption: {
      type: [String, Boolean],
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
  methods: {
    getSrc() {
      if (this.src.includes('http')) {
        return this.src
      }
      return require(`~/assets/images/${this.src}`)
    },
  },
}
</script>

<style>
.image {
  width: 100%;
}

.image__img {
  object-fit: cover;
  width: 100%;
}

.image__caption {
  margin-top: 10px;
}
</style>
