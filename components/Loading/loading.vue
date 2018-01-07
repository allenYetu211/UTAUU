<template lang="html">
<div class="loading" :class="{active: loadingAnimation}">
  <div class="loading__chunk loading__top"></div>
  <div class="loading__chunk loading__bottom"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loadingAnimation: false,
      startTime: 0,
      endTime: 0
    }
  },
  watch: {
    'this.$route.path'(val, oldVla) {
      console.log(val)
      console.log(oldVla)
    }
  },
  created() {
    console.log('created')
  },
  computed: {
    mousePosition: {
      get() {
        return {
          top: this.loading_position.top,
          left: this.loading_position.left
        }
      },
      set(param) {
        this.loading_position.top = param.x
        this.loading_position.left = param.y
      }
    }
  },
  methods: {
    // 切换界面获取 鼠标位置 计算鼠标当前位置 设置 loading出现位置。
    start() {
      this.startTime = new Date().getTime()
      this.loadingAnimation = true
    },
    finish() {
      this.endTime = new Date().getTime()
      //  let differ = this.endTime - this.startTime > 1000 ? true : false
      console.log(this.endTime - this.startTime)
      if (this.endTime - this.startTime <= 1000) {
        setTimeout(() => {
          this.loadingAnimation = false
        }, 500)
      } else {
        this.loadingAnimation = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 50%;
  transition: all 0.5s;
  &.active {
    .loading__bottom{
      transform: translate3d(0 , 0, 0);
    }
    .loading__top {
      transform: translate3d(0 , 0, 0);
    }
  }
}
.loading__chunk{
  width: 100vw;
  height: 50vh;
  position: fixed;
  left: 0;
  background-color:#333;
  transition: all 0.2s;

}
  .loading__top {
    top:0;
    transform: translate3d(0 , -100%, 0);
  }
  .loading__bottom{
    bottom: 0;
    transform: translate3d(0 , 100%, 0);
  }

</style>

