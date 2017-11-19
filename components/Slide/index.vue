<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
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
    },
    data() {
      return {
        banners: ['http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg', 'http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg', 'http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg', 'http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg', 'http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg', 'http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg'],
        swiperOption: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
    },
    mounted() {
      console.log('app init')
      setTimeout(() => {
        this.banners.push('http://demo.themeguron.com/wp/boroda/wp-content/uploads/2015/02/A7G_Pk7bZm81-620x300.jpg')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper,
        'It will slideTo banners 3')
      this.mySwiper.slideTo(3)
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
