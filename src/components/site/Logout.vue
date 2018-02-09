<template>
      <md-button @click="signOut()">LogOut</md-button>
</template>

<script>
  export default {
    name: 'Logout',
    data: () => ({
    }),
    methods: {
      signOut () {
        if (localStorage.getItem('token')) {
          localStorage.setItem('token', '')
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
