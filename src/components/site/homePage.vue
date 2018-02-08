<template>
  <div class="home-page">
    <header-wrap></header-wrap>
    <md-content>
      <h1>dgfsfg</h1>
      <md-button class="md-accent" @click="getUsers">get users</md-button>
      <div>{{ userList }}</div>
    </md-content>
    <footer-wrap></footer-wrap>
  </div>
</template>

<script>
  import Footer from '../site/footer.vue'
  import Header from '../site/header.vue'
  import axios from 'axios'

  export default {
    name: 'HomePage',
    components: {
      'footer-wrap': Footer,
      'header-wrap': Header
    },
    data: () => ({
      userList: ''
    }),
    methods: {
      getUsers () {
        axios.get('http://localhost:3000/users')
          .then(response => {
            this.userList = response.data.users
            console.log(response.data.users)
          }).catch(error => {
            console.log(error)
          })
      }
    }
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
