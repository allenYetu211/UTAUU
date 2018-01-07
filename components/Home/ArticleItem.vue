<template>
  <div class="article__item">
    <nuxt-link :to="{name: 'ArticleParticulars-id', params: {id: item._id}}">
      <div class="article__item--title">
        <h3>{{item.title}}</h3>
      </div>
      <div class="article__item--introduce">
        {{item.introduce}}
      </div>
      <div class="article__item-time">
        <span>{{item.timestamp | disposeTime}}</span>
      </div>
    </nuxt-link>

  </div>
</template>

<script>
  import {dispose} from '~/assets/js/disposeTime'

  export default {
    props: ['item'],
    filters: {
      disposeTime(val) {
        return dispose(val)
      }
    }
  }
</script>

<style lang='scss' scoped>
  .article__item {
    grid-column: auto / span 4;
    border-top: 8px solid #333;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      background-color: #fae76b;
    }
  }

  .article__item--title {
    h3 {
      font-size: 1.63157895em;
      line-height: 1.87096774em;
    }
  }

  .article__item-time {

  }
</style>
