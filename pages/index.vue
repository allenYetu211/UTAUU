<template>
  <div>

    <div class="article__container">
      <!--<header>-->
      <!--<head-content :menuList="menuList"></head-content>-->
      <!--</header>-->
      <article-list :articleList="articleList"></article-list>
    </div>
    <footer>

    </footer>

  </div>
</template>

<script>
  //  import HeadContent from '~/components/Head'
  import axios from '~/assets/js/axios'
  import ArticleList from '~/components/Article/ArticleList'

  export default {
    layout: 'blog',
    async asyncData({store}) {
      const data = await axios.ajax('article/articleList').then(res => {
        return res.data
      })
      // store.commit('setInit', {
      //  tags: data.tags
      // })
      return {
        articleList: data.content
        // tags: data.tag
      }
    },
    data() {
      return {}
    },
    components: {
      // HeadContent
      ArticleList
    }

  }
</script>


<style lang="scss">

  @import "../assets/css/gloab.scss";

  .utau__container {
    padding: 0 0 0 30px;
  }
</style>
