<template>
  <div class="posts_container">
    <h3>Список постов</h3>
    <PostItem v-for="post in posts" :post="post"/>
  </div>

</template>

<script>
import PostItem from '@/compoents/PostItem.vue';
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    components: { PostItem }
};
</script>

<style lang="scss" scoped>
.posts_container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
