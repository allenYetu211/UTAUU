<template>
  <div class="article__list">
    <ArticleItem v-for="(item,key) in articleList" :item="item" :key="key"></ArticleItem>

  </div>
</template>

<script>
  import ArticleItem from './ArticleItem.vue'

  export default {
    props: ['articleList'],
    components: {
      ArticleItem
    }
  }
</script>

<style lang='scss' scoped>
  .article__list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1.4em;
  }

</style>
