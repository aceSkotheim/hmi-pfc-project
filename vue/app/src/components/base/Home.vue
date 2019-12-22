<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../../assets/Horizon-Logo-v2.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Horizon!
        </h1>
        <p class="subheading font-weight-bold">
          A Philosophy of Well-Being
          <br>This is the plant site, please login if you are authorized.
          <br><GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
  components: { GoogleLogin },
  data: () => ({
    params: {
      client_id: "327662722428-hfoutlscnpa4cutmdol0ajn672ke1j1o.apps.googleusercontent.com"
    },
    renderParams: {
      width: 250,
      height: 50,
      longtitle: true,
    },
  }),
  methods: {
    onSuccess(googleUser) {
      // googleUser exists, so grab 'all' authResponse information and put together as django will expect it.
      var auth_resp = googleUser.getAuthResponse(true)
      var user_info = {
        access_token: auth_resp.access_token,
        code: auth_resp.id_token
      }
      // Pass the data to vuex action to set and connect to django - returns a key for Authorization header
      this.$store.dispatch('login', user_info)
      .then(()=>this.$router.push('/user/'))
      .catch(err => window.console.log(err))
    }
  }
};
</script>
