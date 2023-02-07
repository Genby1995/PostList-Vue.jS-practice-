<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <input v-model="post.title" class="input" type="text" placeholder="Название" />
    <input v-model="post.body" class="input" type="text" placeholder="Описание" />
    <MyButton @click="createPost" style="align-self: flex-end">Создать</MyButton>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost(e) {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post.title = "";
      this.post.body = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input {
  width: 100%;
  border: 2px solid var(--color-char);
  padding: 5px;
}
</style>
