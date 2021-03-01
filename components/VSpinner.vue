<template>
  <div class="bt-spinner-wrapper">
    <div class="bt-spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'VSpinner',
}
</script>

<style>
.bt-spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 145px);
}
.bt-spinner {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: transparent;
  border: 4px solid #1a2738;
  border-top-color: #009688;
  animation: 1s spin linear infinite;
}
@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
