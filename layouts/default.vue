<template>
  <div id="main">
    <v-hero />
    <v-top-bar @toggle-sidebar="toggleSidebar" />
    <v-side-bar :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data: () => ({
    showSidebar: false,
  }),
  methods: {
    toggleSidebar(flag) {
      this.showSidebar = flag
    },
  },
}
</script>
