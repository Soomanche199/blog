<template>
  <textarea
    class="textarea"
    :rows="rows"
    :placeholder="placeholder"
    spellcheck="false"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'VTextarea',
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    rows: {
      type: String,
      default: '4',
    },
    value: {
      type: String,
      default: null,
    },
  },
}
</script>

<style>
.textarea {
  background-color: #172331;
  width: 100%;
  outline: none;
  border: none;
  padding: 15px;
  color: currentColor;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;

  &::placeholder {
    color: #7589a2;
    opacity: 0.5;
  }

  & svg {
    margin-right: 15px;
    margin-left: 15px;
    color: currentColor;
  }
}
</style>
