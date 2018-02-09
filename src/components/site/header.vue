<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">My Title</span>
        <logout v-if="userLogin"></logout>
    </md-app-toolbar>
  </md-app>
</template>

<script>
  import Logout from '../site/Logout'

  export default {
    name: 'Header',
    components: {
      'logout': Logout
    },
    data: () => ({
      userLogin: null
    }),
    mounted () {
      if (localStorage.getItem('token')) {
        this.userLogin = true
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #5e5e5e;
  }
</style>
