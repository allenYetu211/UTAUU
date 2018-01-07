<template>
  <div>
    <div class="article__container">
      <article-list :articleList="articleList"></article-list>
    </div>
    <footer>

    </footer>

  </div>
</template>

<script>
  import axios from '~/assets/js/axios'
  import ArticleList from '~/components/Article/ArticleList'
  export default {
    layout: 'blog',
    async asyncData() {
      const data = await axios.ajax('article/articleList').then(res => {
        return res.data
      })
      return {
        articleList: data.content
      }
    },
    components: {
      ArticleList
    }

  }
</script>


<style lang="scss">



</style>
