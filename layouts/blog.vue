<template>
  <div id="utau-c">
    <div class="utau__bg" :style="lateObject"></div>
    <!-- 顶部控制台 -->
    <header-content :menuList="menuList"></header-content>
    <div class="subject__container">
      <div class="main__container">

        <nuxt/>
      </div>
      <div class="utau__container">
        <!--<out-line :border="'bottom'">-->
        <!--<tags></tags>-->
        <!--</out-line>-->

        <out-line :border="'bottom'">
          <about></about>
        </out-line>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderContent from '~/components/Head'
  import Tags from '~/components/Tags'
  import OutLine from '~/components/Ui/uiOutline'
  import About from '~/components/About/about'

  export default {
    data() {
      return {
        menuList: ['Mune', 'About', 'Product'],
        body_height: 0,
        bg_height: 0,
        dsplacement: 0,
        late: {
          transform: 'translate(0, 0)'
        }
      }
    },
    components: {
      HeaderContent,
      Tags,
      OutLine,
      About
    },
    mounted() {
      this.bg_height = document.querySelector('.utau__bg').offsetHeight
      this.body_hieght = document.body.offsetHeight
      window.addEventListener('scroll', this.scroll)
    },
    computed: {
      lateObject: {
        get() {
          this.late.transform = `translate(0, -${this.dsplacement}px)`
          return this.late
        },
        set(v) {
          this.dsplacement = v.toFixed(2) / 10
        }
      }
    },
    methods: {
      scroll(e) {
        let y = window.scrollY
        let translate = (y / this.body_hieght) * this.bg_height
        this.lateObject = translate
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/css/utils';

  .utau__bg {
    will-change: transform;
    background-image: url('../assets/image/bg.png');
    background-repeat: repeat-y;
    background-size: 100% auto;
    width: calc(100vw - 40px);
    height: 0;
    padding-bottom: 500%;
    position: fixed;
    top: 20px;
    left: 20px;
    right: 20px;
    z-index: -1;
  }

  #utau-c {
    padding: 20px;
    min-height: calc(100vh - 20px);
  }

  .subject__container {
    @extend %flex-start-center;
    .main__container {
      flex: 1;
    }
    .utau__container {
      padding: 0 0 0 60px;
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
