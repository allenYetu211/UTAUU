<template>
  <div class="article__particulars--item">
    <div class="wrapper__container">
      <h2>
        {{item.title}}
      </h2>
      <div class="article__particulars--time">
        <p>{{item.timestamp | disposeTime}}</p>
      </div>
      <div class="article__particulars--content">
        {{item.content}}
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleHeadBg from '~/components/Article/ArticleHeadBg'
  import ArticleMainContent from '~/components/Article/ArticleMainContent'
  import axios from '~/assets/js/axios'
  import {dispose} from '~/assets/js/disposeTime'

  export default {
    async asyncData({route}) {
      const data = await axios.ajax('article/findArticle', {}, 'GET', {
        articleId: route.params.id
      }).then(res => {
        console.log(res.data)
        return res.data
      })
      return {item: data}
    },
    components: {
      ArticleHeadBg,
      ArticleMainContent
    },
    filters: {
      disposeTime(val) {
        return dispose(val)
      }
    }
  }
</script>

<style lang='scss' scoped>
  .article__particulars--item {
    background-color: #fff;
    padding: 2em;
    h2 {
      font-size: 4.21052632em;
      line-height: 1.0875em;
      margin-top: 0.3625em;
      margin-bottom: 0.725em;
    }
  }
  .article__particulars--time{
    p {
      font-size: 1.5em;
      line-height: 1em;
      margin-top: 0.3625em;
      margin-bottom: 0.725em;
    }
  }

</style>
