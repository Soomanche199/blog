<template>
  <div class="page blog" data-simplebar>
    <nuxt-child />
    <v-footer />
  </div>
</template>

<script>
import parentTransition from '@/mixins/parentTransition'
import 'simplebar'

export default {
  name: 'Blog',
  mixins: [parentTransition],
}
</script>
