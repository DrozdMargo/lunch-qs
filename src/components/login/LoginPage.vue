<template>

  <md-content class="md-elevation-4">
    <form class="md-layout-row md-gutter" novalidate @submit.prevent="validateUser">
      <md-card class="md-flex-50 md-flex-small-100">
        <md-card-header>
          <div class="md-title">Sign Up</div>
        </md-card-header>
      </md-card>

      <md-card-content>
        <div class="md-layout-row md-layout-wrap md-gutter">

        <div class="md-flex md-flex-small-100">
          <md-field :class="getValidationClass('userName')">
            <label for="user-name">User Name</label>
            <md-input name="user-name" id="user-name" v-model="form.userName"></md-input>
            <span class="md-error" v-if="!$v.form.userName.required">The  user name is required</span>
          </md-field>
        </div>


        <md-field :class="getValidationClass('password')">
          <label for="password">Password</label>
          <md-input type="password" name="password" id="password" for="password" v-model="form.password">Password
          </md-input>
          <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
        </md-field>

          <md-switch v-model="form.rememberMe" class="md-primary">Remember Me</md-switch>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button type="submit" class="md-primary md-raised" :disabled="sending && !$v.form.valid" @click.prevent="validateUser">Log In</md-button>
      </md-card-actions>

    </form>
  </md-content>
</template>

<script>
  import {validationMixin} from 'vuelidate'
  import {
    required
  } from 'vuelidate/lib/validators'

  export default {
    name: 'LoginPage',
    mixins: [validationMixin],
    data: () => ({
      form: {
        userName: null,
        password: null,
        rememberMe: false
      },
      sending: false,
      userSaved: false
    }),
    validations: {
      form: {
        userName: {
          required
        },
        password: {
          required
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]
        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.userName = null
        this.form.password = null
      },
      saveUser () {
        this.sending = true
        window.setTimeout(() => {
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser()
        }
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
