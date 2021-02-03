<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    class="svg-inline--fa"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'VSvg',
  props: {
    viewBox: { type: String, default: '0 0 24 24' },
    width: { type: [Number, String], default: '1em' },
    height: { type: [Number, String], default: '1em' },
  },
}
</script>
