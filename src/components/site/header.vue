<template>
  <!--<div class="page-container"></div>-->
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">My Title</span>
      <md-button @click="signOut()">LogOut</md-button>
    </md-app-toolbar>
  </md-app>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
    }),
    methods: {
      signOut () {
        if (localStorage.token) {
          localStorage.token = null
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #5e5e5e;
  }
</style>
