<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Username"
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
              small @click="login" :disabled="!valid"
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
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
      ],
    }),
    methods: {
        login () {
          Authendicate.login(this.username, this.password).then(res => {
            console.log('res', res);
          }).catch(err => {
            console.log('err', err);
          })
        }
    }
  }
</script>