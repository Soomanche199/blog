<template>
  <div id="main">
    <client-only placeholder="Loading...">
      <!-- this component will only be rendered on client-side -->
      <v-hero />
    </client-only>
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
