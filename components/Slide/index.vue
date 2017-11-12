<template>
  <div class="slide__container">
    <div class="slide__items" v-for="item in slideImg">
      <img :src="item.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slideImg: {
        type: Array,
        default() {
          return [
            {
              title: 'TEST - 1',
              image: 'http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg'
            },
            {
              title: 'TEST - 2',
              image: 'http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg'
            },
            {
              title: 'TEST - 2',
              image: 'http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg'
            }
          ]
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../assets/css/utils.scss';

  .slide__container {
    @extend %flex-center-start;
    overflow: hidden;
    margin: 0 -20px;
  }

  .slide__items {
    vertical-align: center;
  }
</style>
