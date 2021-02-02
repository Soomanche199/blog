<template>
  <section>
    <h2 :class="isPlayable">sooman che</h2>
    <h3 :class="isPlayable">fullstack developer</h3>
  </section>
</template>

<script>
export default {
  name: 'HeroLogo',
  computed: {
    isPlayable() {
      return {
        play: this.$route.path === '/',
      }
    },
  },
  mounted() {
    this.playable = true
  },
}
</script>

<style scoped>
section {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: skewY(-10deg);

  & h2 {
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 8vw;
    font-weight: 900;
    color: #00a9a2;
    text-transform: uppercase;
    transition: transform 0.5s;
    transform-origin: left;
    transform: scaleX(0);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00a9a2;
      transform-origin: right;
      transition: 0.5s;
    }

    &.play {
      transform: scaleX(1);

      &::before {
        transform: scaleX(0);
        transition-delay: 0.5s;
      }
    }
  }

  & h3 {
    position: relative;
    margin: 0;
    padding: 0;
    display: inline-block;
    font-size: 4vw;
    font-weight: 900;
    color: #6a55fa;
    text-transform: uppercase;
    transition: transform 0.5s;
    transform-origin: right;
    transform: scaleX(0);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #6a55fa;
      transform-origin: right;
      transition: 0.5s;
    }
    &.play {
      transform: scaleX(1);
      transition-delay: 1s;

      &::before {
        transform: scaleX(0);
        transition-delay: 1.5s;
      }
    }
  }
}

@media (min-width: 1264px) {
  section {
    margin-left: 300px;
    width: calc(100% - 300px);

    & h2 {
      font-size: 8vw;
    }

    & h3 {
      font-size: 4vw;
    }
  }
}
</style>
