<template>

  <div class="article__item--main">
    <div class="article__item--less" v-if="!allContent">{{item.introduce}}</div>
    <div class="article__item--more" v-else v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
  import marked from 'marked'
  import hljs from 'highlight.js'
  import 'highlight.js/styles/tomorrow-night.css'

  export default {
    components: {marked, hljs},
    props: {
      item: {},
      allContent: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        html: ''
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.item.content, { sanitize: true })
      }
    },
    mounted() {
      hljs.initHighlightingOnLoad()
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
