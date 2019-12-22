<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          User
        </h1>
          <v-card
              class="mx-auto"
              max-width="344"
              outlined
          >
            <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">AREA | POSITION</div>
                <v-list-item-title class="headline mb-1">{{ user.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-avatar>
              <img v-bind:src="user.picture" v-bind:alt="user.given_name">
            </v-avatar>
            </v-list-item>

            <v-card-actions>
            <v-btn text>Send Message</v-btn>
            <v-btn text>Button</v-btn>
            </v-card-actions>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      user: {},
      token: ''
    }
  },
  mounted(){
    this.user = this.$store.getters.USER
    window.console.log(this.user)
  }
}
</script>