<template>
  <div class="menu">
    <header-wrap></header-wrap>
    <md-content>
      <h1>Friend order</h1>
    </md-content>
    <footer-wrap></footer-wrap>
  </div>
</template>

<script>
  import Header from '../site/header.vue'
  import Footer from '../site/footer.vue'

  export default {
    name: 'FriendOrder',
    components: {
      'header-wrap': Header,
      'footer-wrap': Footer
    }
  }
</script>

<style scoped>

</style>
