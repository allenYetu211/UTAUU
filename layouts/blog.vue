<template>
  <div id="utau-c">
    <!-- 顶部控制台 -->
    <header-content :menuList="menuList"></header-content>
    <div class="subject__container">
      <div class="main__container">
        <nuxt/>
      </div>
      <div class="utau__container">
        <tags></tags>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderContent from '~/components/Head'
  import Tags from '~/components/Tags'

  export default {
    data() {
      return {
        menuList: ['Mune', 'About', 'Product']
      }
    },
    components: {
      HeaderContent,
      Tags
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/utils';

  #utau-c {
    padding: 20px;
    background-color: #fff;
    min-height: calc(100vh - 20px);
  }
  .subject__container {
    @extend %flex-start-center;
    .main__container {
      flex: 1;
    }
    .utau__container {
      width: 33.33333333%;
    }
  }
  .subject__container {
    padding-top: 50px;
    width: 80%;
    max-width: 1170px;
    margin: 0 auto;
  }

  .transform__container--head {
    position: fixed;
    top: 20px;
    right: 20px;
    text-align: right;
  }
</style>
