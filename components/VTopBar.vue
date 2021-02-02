<template>
  <div class="top-bar">
    <div class="top-bar__hamburger" @click="$emit('toggle-sidebar', true)">
      <fa icon="bars" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTopBar',
}
</script>

<style>
.top-bar {
  position: relative;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 9;
}

.top-bar__hamburger {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 35px;

  & svg {
    color: white;
    font-size: 30px;
  }
}

@media (min-width: 1264px) {
  .top-bar {
    display: none;
  }
}
</style>
