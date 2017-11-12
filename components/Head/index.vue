<template>
  <header>
    <!-- 顶部控制台 -->
    <div class="transform__container--head">
      <div class="head__menu c-content__list">
        <ul>
          <li v-for="item in menuList">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    {{$route.name}}
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
    }
  }
</script>
