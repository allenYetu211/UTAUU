<template>
  <div class="article__item">

    <article-head-bg :item="item"></article-head-bg>
    <div class="article__item--container">
      <article-main-content :item="item"></article-main-content>

      <article-comment :item="item"></article-comment>
    </div>
  </div>
</template>

<script>
  import ArticleHeadBg from './ArticleHeadBg'
  import ArticleMainContent from './ArticleMainContent'
  import ArticleComment from './ArticleComment'

  export default {
    props: ['item'],
    components: {
      ArticleHeadBg,
      ArticleMainContent,
      ArticleComment
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../assets/css/utils';

  .article__item {
    margin-bottom: 40px;
    background-color: #fbfbfb;
    text-transform: uppercase;
  }

  .article__item--container {
    text-transform: uppercase;
    padding: 20px;
  }


</style>
