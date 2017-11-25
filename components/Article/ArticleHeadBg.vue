<template>
  <div class="article__item--head-bg">
    <div class=" article__item--head">
      <div class="article__item--bg-txt">
        {{item.title}}
      </div>
      <div class="article__item--title">
        <div><span>{{item.timestamp | dispose}}</span> |
          <nuxt-link :to="{name: 'article-id', params: {id: item._id}}">LIVESTYLE</nuxt-link>
        </div>
        <h2>
          <nuxt-link :to="{name: 'article-id', params: {id: item._id}}">{{item.title}}</nuxt-link>
        </h2>
      </div>
    </div>

    <div class=" article__item--image"
         :style="{backgroundImage: 'url(\'http://' + item.picture + '\')'}"></div>
  </div>
</template>
<script>
  export default {
    props: ['item'],
    filters: {
      dispose(val) {
        let date = new Date(val)
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let D = date.getDate() + ' '
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        return Y + M + D + h + m + s
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/utils';

  .article__item--head {
    padding: 40px 0;
    position: relative;
    .article__item--title {
      text-align: center;
      color: #999;
      div {
        a {
          color: #999;
        }
      }
      h2 {
        a {
          color: #333;
        }
      }
    }
    .article__item--bg-txt {
      @include ab-center(50%, auto, 50%, auto, 100%, auto);
      transform: translate(-50%, -50%);
      text-align: center;
      color: rgba(0, 0, 0, 0.03);
      font-size: 57px;
      pointer-events: none;
      text-transform: uppercase;
    }
  }

  .article__item--image {
    width: 100%;
    height: 0;
    padding-bottom: 35%;
    @extend %bg_content;
  }
</style>
