<template>
  <div class="tags__container">
    <ul class="tags__content">
      <li v-for="item in $store.state.tags">
        <nuxt-link :to="{name: 'article-id', params: {id: item}, query: {tag: item}}">{{item}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import '../../assets/css/utils';

  .tags__container {
    padding: 30px 20px;
    background-color: #fbfbfb;
    .tags__content {
      @extend %flex-wrap-center-start;
    }
    li {
      margin: 0 10px;
    }
  }
</style>
