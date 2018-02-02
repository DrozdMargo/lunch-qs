<template>
  <div class="home-page">
    <header-wrap></header-wrap>
    <md-content>
      <h1>dgfsfg</h1>
    </md-content>
    <footer-wrap></footer-wrap>
  </div>
</template>

<script>
  import Footer from '../site/footer.vue'
  import Header from '../site/header.vue'

  export default {
    name: 'HomePage',
    components: {
      'footer-wrap': Footer,
      'header-wrap': Header
    },
    data: () => ({}),
    methods: {}
  }
</script>

<style lang="scss">
.md-content{
  height: 100%;
  h1{
    font-size: 22px;
  }
}
</style>
