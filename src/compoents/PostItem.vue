<template>
  <div class="post">
    <div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post_btns">
      <MyButton>Удалить</MyButton>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.post {
  padding: 15px;
  border: 2px var(--color-char) solid;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .post_btns {
    display: flex;
  }
}
</style>
