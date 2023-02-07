<template>
  <div class="container">
    <PostForm @create="createPost"/>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostForm from "@/compoents/PostForm.vue";
import PostList from "@/compoents/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Jsvascript",
          body: "Пост про что-то 1",
        },
        {
          id: 2,
          title: "Jsvascript",
          body: "Пост про что-то 2",
        },
        {
          id: 3,
          title: "Jsvascript",
          body: "Пост про что-то 3",
        },
        {
          id: 4,
          title: "Jsvascript",
          body: "Пост про что-то 4",
        },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost(post){
      this.posts.push(post)
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-text: rgb(35, 35, 35);
  --color-text-dark: rgb(15, 15, 15);
  --color-text-warn: red;
  --color-stroke: rgba(35, 35, 35, 0.25);
  --color-bkg: rgb(195, 195, 195);
  --color-main: rgb(225, 225, 225);
  --color-main-light: rgb(235, 235, 235);
  --color-main-dark: rgb(155, 155, 155);
  --color-char: rgb(0, 100, 200);
  --color-char-text: rgb(220, 220, 220);
  --color-char-trans: rgba(0, 100, 200, 0.3);
}

.container {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
