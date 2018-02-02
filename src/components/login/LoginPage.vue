<template>

  <md-content class="md-elevation-4">
    <form class="md-layout-row md-gutter" novalidate @submit.prevent="validateUser">
      <md-card class="md-flex-50 md-flex-small-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>
      </md-card>

      <md-card-content>
        <div class="md-layout-row md-layout-wrap md-gutter">

          <div class="md-flex md-flex-small-100">
            <md-field :class="getValidationClass('user_name')">
              <label for="user-name">User Name</label>
              <md-input name="user-name" id="user-name" v-model="form.user_name"></md-input>
              <span class="md-error" v-if="!$v.form.user_name.required">The  user name is required</span>
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
        <md-button type="submit" class="md-primary md-raised" :disabled="sending && !$v.form.valid"
                   @click.prevent="validateUser">Log In
        </md-button>
      </md-card-actions>

    </form>
  </md-content>
</template>

<script>
  import {validationMixin} from 'vuelidate'
  import axios from 'axios'
  import {
    required
  } from 'vuelidate/lib/validators'

  export default {
    name: 'LoginPage',
    mixins: [validationMixin],
    data: () => ({
      form: {
        user_name: null,
        password: null,
        rememberMe: false
      },
      sending: false,
      userSaved: false
    }),
    validations: {
      form: {
        user_name: {
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
        this.form.user_name = null
        this.form.password = null
      },
      saveUser (form) {
        this.sending = true
        axios.post('http://localhost:3000/login', form).then(response => {
          if (!response.data.errors) {
            console.log('no errors')
          }
          console.log(response)
        }).catch(e => {
          console.log(e)
        })
      },
      validateUser () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser(this.form)
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
