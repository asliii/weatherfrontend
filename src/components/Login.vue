<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
        </v-col>
        <v-col>
        <v-btn
            color="primary"
            elevation="2"
            small @click="login"
            >Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  import Authendicate from '../services/Authendicate'

  export default {
    name: 'LoginComp',
    data: () => ({
      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 10 || 'Password must be less than 10 characters',
        v => v.length >= 6 || 'Password must be at least 8 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
        login () {
          Authendicate.login(this.email, this.password).then(res => {
            console.log('res', res);
          }).catch(err => {
            console.log('err', err);
          })
        }
    }
  }
</script>