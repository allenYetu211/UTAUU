<template>
  <div>
    <div class="wrapper">
      <nav class="site__nav">
        <a class="site-logo"></a>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>
            <nuxt-link :to="{name:'article'}">Article</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <nuxt/>
    <Footers></Footers>

  </div>
</template>
<script>
  import Footers from '~/components/Footer/footer'

  export default {
    components: {
      Footers
    }
  }
</script>
<style lang="scss">
  @import '../assets/css/utils.scss';

  nav {
    @extend %flex-center-between;
  }

  ul {
    @extend %flex-center;
  }

  .site-logo {
    width: 50px;
    height: 50px;
    background-image: url('../assets/image/utau-logo.png');
    background-size: 100%;
  }

  .wrapper {
    width: 85%;
    max-width: 1080px;
    margin: 0 auto;
    padding-bottom: 1em;
    zoom: 1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1.4em;
  }

  .site__nav {
    grid-column: auto / span 12;
  }

  ul {
    margin: 0.4em;
    li {
      font-size: 32px;
      padding: 10px;
      font-weight: 700;
    }
  }
</style>
