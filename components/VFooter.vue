<template>
  <footer class="footer">
    <div>Copyright © 2021 Sooman</div>
  </footer>
</template>

<script>
export default {
  name: 'VFooter',
}
</script>

<style>
.footer {
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 15px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;

  & .container {
    padding-bottom: 0;
  }
}
</style>
