<template>

    <div class="article__item--main">
      <div class="article__item--less" v-if="!allContent">{{item.container}}</div>
      <div class="article__item--more" v-else v-html="item.container"></div>
    </div>
</template>

<script>
  export default {
    props: {
      item: {},
      allContent: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import '../../assets/css/utils';



  .article__item--main {
    margin-bottom: 15px;
  }

  .article__item--footer {
    @extend %flex-center-between;
  }
</style>
