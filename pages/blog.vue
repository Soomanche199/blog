<template>
  <div class="page blog" data-simplebar>
    <nuxt-child />
  </div>
</template>

<script>
import parentTransition from '@/mixins/parentTransition'
import 'simplebar'
import 'simplebar/dist/simplebar.css'

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
