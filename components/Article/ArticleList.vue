<template>
  <div class="article__list">
    <ul>
      <li v-for="item in articleList">
        <out-line :border="'bottom'">
          <article-item :item="item"></article-item>
        </out-line>
      </li>
    </ul>

    <div class="article__list--more">
      <button>EXAMINE ARTICLE</button>
    </div>

  </div>
</template>

<script>
  import ArticleItem from './ArticleItem.vue'
  import OutLine from '~/components/Ui/uiOutline'

  export default {
    props: {
      articleList: {
        type: Array,
        default() {
          return {message: '暂无数据'}
        }
      }
    },
    components: {
      ArticleItem,
      OutLine
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../assets/css/utils';

  .article__list--more {
    button {
      @extend %flex-center;
      border: none;
      background-color: transparent;
      width: 100%;
      height: 35px;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background-color: #e7e7e7;
      }
    }
  }
</style>
