<template>
  <div class="ui__container">
    <div class="ui__distance ui__outline" v-if="border=== 'basis'">
      <slot></slot>
    </div>
    <div class=" ui__distance ui__bottom" v-if="border==='bottom'">
      <slot></slot>
    </div>
  </div>


</template>

<script>
  export default {
    props: {
      border: {
        type: String,
        default: 'basis'
      }
    }
  }
</script>

<style lang="scss" scoped="">
  .ui__distance {
    margin-bottom: 60px;
  }

  .ui__outline {
    border-top: 4px solid #333;
    border-bottom: 4px solid #333;

  }

  .ui__bottom {
    border-bottom: 4px solid #333;
  }
</style>
