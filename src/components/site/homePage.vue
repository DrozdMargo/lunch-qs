<template>
  <div class="home-page">
    <header-wrap></header-wrap>
    <md-content></md-content>
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

<style scoped>
.md-content{
  height: 100%;
}
</style>
