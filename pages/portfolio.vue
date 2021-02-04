<template>
  <div class="page portfolio">
    <div class="container">
      <ul class="tab">
        <li>All</li>
        <li>Private</li>
        <li>Public</li>
      </ul>
    </div>
  </div>
</template>

<script>
import parentTransition from '@/mixins/parentTransition'

export default {
  name: 'Portfolio',
  mixins: [parentTransition],
}
</script>
