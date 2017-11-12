<template>
  <div class="article__item--footer">
    <div>{{item.articleId}}评论</div>
    <nuxt-link :to="{name: 'article-id', params: {id: item.articleId}}">{{item.tag}}</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/utils';

  .article__item--footer {
    @extend %flex-center-between;
  }

</style>
