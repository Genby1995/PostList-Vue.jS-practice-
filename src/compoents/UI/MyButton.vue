<template>
    <button class="button">
        <slot/>
    </button>
</template>

<script>
    export default {
        name: "MyButton"
    }
</script>

<style lang="scss" scoped>
.button {
  border: 2px solid var(--color-char);
  background: none;
  color: var(--color-char);
  padding: 5px;
}
</style>