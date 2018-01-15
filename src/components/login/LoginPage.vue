<template>

  <md-content class="md-elevation-4">
    <form class="md-layout-row md-gutter" novalidate>
      <md-card class="md-flex-50 md-flex-small-100">
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>
      </md-card>

      <md-card-content>
        <div class="md-layout-row md-layout-wrap md-gutter">
          <div class="md-flex md-flex-small-100">
            <md-field>
              <label for="first-name">First Name</label>
              <md-input name="first-name" id="first-name"></md-input>
            </md-field>
          </div>

          <div class="md-flex md-flex-small-100">
            <md-field>
              <label for="last-name">Last Name</label>
              <md-input name="last-name" id="last-name"></md-input>
            </md-field>
          </div>
        </div>

        <div class="md-flex md-flex-small-100">
          <md-field>
            <label for="user-name">User Name</label>
            <md-input name="user-name" id="user-name"></md-input>
          </md-field>
        </div>

        <md-field>
          <label for="email">Email</label>
          <md-input type="email" name="email" id="email" autocomplete="email" for="email">Email</md-input>
        </md-field>

        <md-field>
          <label for="password">Password</label>
          <md-input type="password" name="password" id="password" for="password">Password</md-input>
        </md-field>

        <md-field>
          <label for="confirm-password">Confirm password</label>
          <md-input type="password" name="confirm-password" id="confirm-password" for="confirm-password">Confirm password</md-input>
        </md-field>

      </md-card-content>

    </form>
  </md-content>
</template>

<script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        msg: 'Welcome to Login Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .md-content {
    width: 600px;
    margin: 0 auto;
  }
</style>
