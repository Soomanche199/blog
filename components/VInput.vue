<template>
  <div class="input-group">
    <input
      type="text"
      :placeholder="placeholder"
      spellcheck="false"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
}
</script>

<style>
.input-group {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #172331;
  height: 50px;
  width: 100%;

  & input {
    font-size: 16px;
    background-color: transparent;
    color: currentColor;
    outline: none;
    border: none;
    padding-left: 15px;
    width: 100%;
    height: 100%;

    &::placeholder {
      color: #7589a2;
      opacity: 0.5;
    }
  }

  & svg {
    margin-right: 15px;
    margin-left: 15px;
    color: currentColor;
  }
}
</style>
