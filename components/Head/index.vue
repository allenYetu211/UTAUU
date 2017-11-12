<template>
  <header>
    <!-- 顶部控制台 -->
    <div class="transform__container--head">
      <div class="head__menu c-content__list">
        <button class="txt__transflate" @click="examineMenu" >
          <span  v-show="!exMenu">mune</span>
          <span  v-show="exMenu">close</span>
          </button>
        <ul :class="{'menu__open': exMenu}">
          <li class="txt__transflate"  v-for="item in menuList">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <slide v-if="$route.name === 'index'"></slide>
  </header>


</template>

<script>
  import Slide from '../Slide'

  export default {
    props: {
      menuList: {
        type: Array,
        default: ['M1', 'M2']
      }
    },
    components: {
      Slide
    },
    data() {
      return {
        exMenu: false
      }
    },
    methods: {
      examineMenu() {
        this.exMenu = !this.exMenu
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/utils.scss';
.txt__transflate {
  transition: all 0.3s;
  &:hover {
    color:#cdb48c
  }
}
  .transform__container--head {
    position: fixed;
    left: 0;
    padding: 10px;
    background-color: #eaeaea;
    text-transform: uppercase;
    z-index: 99;
  }

  .head__menu {
    padding:  5px;
    background-color: #333;
    color: #fff;
    @extend %flex-center;
    ul {
      @extend %flex-vertical-center;
      height: 0;
      width: 0;
      overflow: hidden;
      text-align: center;
      transition: all 0.5s;
      &.menu__open {
        width: 200px;
        height: 66px;
      }
      li {
        flex: 1;
        @extend %flex-center;
        font-size: 11px;
      }
    }
    button {
      height: 100%;
      width: 100%;
      padding: 0;
      border: none;
      background: transparent;
      color:#fff;
      font-size: 11px;
      text-transform: uppercase;
    }
  }
</style>
