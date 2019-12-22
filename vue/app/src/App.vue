<template>
  <v-app>
    <Navdrawer/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>
<!-- <HelloWorld/> -->
<script>
import Navdrawer from '@/components/core/Navdrawer.vue';
import Footer from '@/components/core/Footer.vue';

export default {
  name: 'App',
  components: {
    Navdrawer, Footer
  },
  data: () => ({
  }),
};
</script>
