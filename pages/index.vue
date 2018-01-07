<template>
  <div>
    <div class="home__container">

      <div class="wrapper__container">
        <div class="wrapper__first--screen">
          <div class="wrapper">
            <h1 class="home__top--screen">
              UTAU
              <br/>
              By Allen
            </h1>
          </div>
        </div>
      </div>

      <div class="wrapper__container section__style">
        <div class="home__explain">
          <h2>第一次来的朋友!<br/>可以留下你的名字吗？</h2>
        </div>
      </div>

      <div class="wrapper__container section__style wrapper__table">
        <div class="home__explain">
          <h2>你想了解我吗？<br/>这儿是我写过的一些东西。</h2>
        </div>
        <ArticleList :articleList="articleList"></ArticleList>
        <p class="home__article--know-more">想了解更多 查看全部 >></p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '~/assets/js/axios'
  //  import Navs from '~/components/Nav/nav'
  import ArticleList from '~/components/Home/ArticleList'

  export default {
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
  @import "../assets/css/gloab.scss";
  @import "../assets/css/utils.scss";

  .wrapper__container {
    width: 85%;
    max-width: 1080px;
    margin: 0 auto;
    &.wrapper__table{
      padding-bottom: 1em;
    }
  }

  .wrapper {
    padding-bottom: 1em;
    zoom: 1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1.4em;

  }

  h1.home__top--screen {
    grid-column: auto / span 10;
    font-size: 9em;
    line-height: 1.0;
    display: block;
    margin-top: 24%;
  }

  .wrapper__first--screen {
    height: 93vh;
  }

  .section__style {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      background: #333;
      top: 0;
      left: 0;
      height: 12px;
      width: 12em;
    }
  }
  .home__article--know-more{
    font-size: 1.63157895em;
    line-height: 1.87096774em;
    margin-top: 0.93548387em;
  }
  .home__explain {
    display: grid;
    grid-template-columns: repeat(12 / 1fr);
    padding-top: 1em;
    padding-bottom: 1.6em;
    h2 {
      grid-column: auto / span 6;
      padding: 0;
      margin: 0.58em 0;
    }
  }
</style>
