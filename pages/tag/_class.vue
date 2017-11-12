<template>
  <div>
    <article-head-bg :item="item"></article-head-bg>
    <div class="article__item--container">
      <article-main-content :item="item" :allContent="true"></article-main-content>
    </div>
  </div>
</template>

<script>
  import ArticleHeadBg from '~/components/Article/ArticleHeadBg'
  import ArticleMainContent from '~/components/Article/ArticleMainContent'
  import axios from '~/assets/js/axios'

  export default {
    layout: 'blog',
    async asyncData() {
      const data = await axios.ajax(`/utau/article-id/article-1`).then(res => {
        return res.data.data.article
      })
      console.log(data)
      return {item: data}
    },
    components: {
      ArticleHeadBg,
      ArticleMainContent
    }
  }
</script>

<style lang='scss' scoped>
  .article__item--container {
    padding: 20px;
  }
</style>
