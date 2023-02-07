<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: 2px solid var(--color-char);
  padding: 5px;
}
</style>
