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
            <md-field :class="getValidationClass('first_name')">
              <label for="first-name">First Name</label>
              <md-input name="first-name" id="first-name" v-model="form.first_name" :disabled="sending"></md-input>
              <span class="md-error" v-if="!$v.form.first_name.required">The first name is required</span>
              <span class="md-error" v-else-if="!$v.form.first_name.minLength">The first name is too short</span>
              <span class="md-error" v-else-if="!$v.form.first_name.maxLength">The first name is too slong</span>
            </md-field>
          </div>

          <div class="md-flex md-flex-small-100">
            <md-field :class="getValidationClass('last_name')">
              <label for="last-name">Last Name</label>
              <md-input name="last-name" id="last-name" v-model="form.last_name" :disabled="sending"></md-input>
              <span class="md-error" v-if="!$v.form.last_name.required">The  last name is required</span>
              <span class="md-error" v-else-if="!$v.form.last_name.minLength">The last name is too short</span>
              <span class="md-error" v-else-if="!$v.form.last_name.maxLength">The last name is too slong</span>
            </md-field>
          </div>
        </div>

        <div class="md-flex md-flex-small-100">
          <md-field :class="getValidationClass('user_name')">
            <label for="user-name">User Name</label>
            <md-input name="user-name" id="user-name" v-model="form.user_name"></md-input>
            <span class="md-error" v-if="!$v.form.user_name.required">The  user name is required</span>
            <span class="md-error" v-else-if="!$v.form.user_name.minLength">The user name is too short</span>
            <span class="md-error" v-else-if="!$v.form.user_name.maxLength">The user name is too slong</span>
          </md-field>
        </div>

        <md-field :class="getValidationClass('email')">
          <label for="email">Email</label>
          <md-input type="email" name="email" id="email" autocomplete="email" for="email" v-model="form.email">Email
          </md-input>
          <span class="md-error" v-if="!$v.form.email.email">It is not valid email</span>
        </md-field>

        <md-field :class="getValidationClass('password')">
          <label for="password">Password</label>
          <md-input type="password" name="password" id="password" for="password" v-model="form.password">Password
          </md-input>
          <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
          <span class="md-error" v-else-if="!$v.form.password.minLength">The password is too short</span>
        </md-field>

        <md-field :class="getValidationClass('confirmPassword')">
          <label for="confirm-password">Confirm password</label>
          <md-input type="password" name="confirm-password" id="confirm-password" for="confirm-password"
                    v-model="form.confirmPassword">Confirm
            password
          </md-input>
          <span class="md-error" v-if="!$v.form.confirmPassword.required">Please repeat password</span>
          <span class="md-error" v-else-if="!$v.form.confirmPassword.sameAsPassword">Passwords must be identical.</span>
        </md-field>

      </md-card-content>
      <md-card-actions>
        <md-button type="submit" class="md-primary md-raised" :disabled="sending && !$v.form.valid"
                   @click.prevent="validateUser">Sign Up
        </md-button>
      </md-card-actions>

    </form>
  </md-content>
</template>

<script>
  import {validationMixin} from 'vuelidate'
  import axios from 'axios'
  import {
    required,
    email,
    minLength,
    maxLength,
    sameAs
  } from 'vuelidate/lib/validators'

  export default {
    name: 'SignIn',
    mixins: [validationMixin],
    data: () => ({
      form: {
        first_name: null,
        last_name: null,
        user_name: null,
        email: null,
        password: null,
        confirmPassword: null
      },
      sending: false,
      userSaved: false
    }),
    validations: {
      form: {
        first_name: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(25)
        },
        last_name: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(25)
        },
        user_name: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20)
        },
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        },
        confirmPassword: {
          required,
          sameAsPassword: sameAs('password')
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
        this.form.first_name = null
        this.form.last_name = null
        this.form.user_name = null
        this.form.email = null
        this.form.password = null
        this.form.confirmPassword = null
      },
      saveUser (form) {
        this.sending = true
        axios.post('http://localhost:3000/signup', form).then(response => {
          console.log(response)
        }).catch(e => {
          this.errors.push(e)
        })
      },
      validateUser () {
        const form = this.form
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser(form)
        }
      }
    }
  }
</script>

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
