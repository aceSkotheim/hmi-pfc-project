<template>
  <v-container>
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Horizon</v-toolbar-title>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      color="grey lighten-3"
      app
    >
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" :href="item.href">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: null, 
    items: [
          { title: 'Home', icon: 'mdi-home', to: '/' },
          { title: 'Contact', icon: 'mdi-contact-mail', to: '/contact/' },
          { title: 'Inventory', icon: 'mdi-warehouse', to: '/inventory/' },
          { title: 'Orders', icon: 'mdi-clipboard-list', to: '/orders/' },
          { title: 'Customer Complaints', icon: 'mdi-account-alert', to: '/complaints/' },
          { title: 'Production', to: '/production/'},
          { title: 'Files', icon: 'mdi-file', to: '/files/' },
          { title: 'Test', icon: 'mdi-file', to: '/testupload/' },
        ],
  }),
  methods: {
    setUser: function() {
      this.$store.dispatch('RETRIEVE_USER');
    }
  },
  created() {
    // when the app is created run the set user method
    // this uses Vuex to check if a user is signed in
    // check out mutations in the store.js file
    this.setUser();
  }

}
</script>

<style>

</style>