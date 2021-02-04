<template>
  <div class="page index">
    <div class="dummy"></div>
  </div>
</template>

<script>
import parentTransition from '@/mixins/parentTransition'

export default {
  mixins: [parentTransition],
}
</script>

<style>
.index {
  display: none;
}
</style>
