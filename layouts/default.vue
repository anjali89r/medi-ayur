<template>
  <v-app>
   <NavBar />
    <nuxt />
    <no-ssr>
       <cookie-law theme="dark-lime">
  <div slot="message">
    This website uses cookies to ensure you get the best experience on your website.
  </div>
</cookie-law>

    </no-ssr>

    <Footer />
  </v-app>
</template>

<script>
 import CookieLaw from 'vue-cookie-law'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  components: {
    NavBar,
    Footer,
    CookieLaw
  }
};
</script>
<style scoped>

body {
  font: 500 13px/1.7 "Open Sans", Arial, sans-serif;
}

</style>
