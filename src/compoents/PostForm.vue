<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <MyInput v-model="post.title" placeholder="Название" />
    <MyInput v-model="post.body" placeholder="Описание" />
    <MyButton @click="createPost" style="align-self: flex-end">Создать</MyButton>
  </form>
</template>

<script>
import MyInput from './UI/MyInput.vue';


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
    components: { MyInput }
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
