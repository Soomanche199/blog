<template>
  <div class="page blog">
    <nuxt-child />
  </div>
</template>

<script>
import parentTransition from '@/mixins/parentTransition'

export default {
  name: 'Blog',
  mixins: [parentTransition],
}
</script>
<style scoped>
.blog .container {
  margin-top: 70px;
}
</style>
