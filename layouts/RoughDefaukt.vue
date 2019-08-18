<template>
  <v-app>
    <template>
      <div class="medi-top">
        <v-container class="top-container">
          <v-layout row wrap>
            <v-toolbar class="top-toolbar">
              <v-toolbar-items class="top-items">
                <v-icon class="pa2">mail</v-icon>
                <v-icon class="pa2">phone</v-icon>
                <v-icon class="pa2">phone</v-icon>
              </v-toolbar-items>
            </v-toolbar>
          </v-layout>
        </v-container>
      </div>

      <div class="medi-logo">
        <v-container class="logo-container">
          <v-layout>
            <v-toolbar class="logo-toolbar">

              <v-toolbar-title>
                <img src="../assets/images/medinovitalogo.png">
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items class="logo-items">
                <v-btn><v-icon>mail</v-icon>Email Us<br>care@medinovita.com</v-btn>
                <v-btn><v-icon>phone</v-icon>Get A CALLBACK<br>+91-9740177277</v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-layout>
        </v-container>
      </div>
      <div class="medi-header">
        <v-container class="menu-container">
          <v-layout row wrap>

             <v-navigation-drawer class="sideDrawer hidden-md-and-up" v-model="sideNav" fixed  dark>
               <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/">Home</router-link>
            </v-list-tile-title>
          </v-list-tile>

          <v-list-group prepend-icon="shopping_basket" value="true" no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title>
                <router-link to="#">Treatments Offered</router-link>
              </v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(item, i) in items" :key="i">
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
              <!-- <v-list-tile-action>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-tile-action>-->
            </v-list-tile>
          </v-list-group>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/">Our Services</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/">Hospitals & Doctors</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/">Medical Visa</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/">Blog</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/">Contact Us</router-link>
            </v-list-tile-title>
          </v-list-tile>
          </v-list>
        </v-navigation-drawer>

            <v-toolbar class="menu-toolbar">
              <v-toolbar-side-icon @click.native.stop="sideNav=!sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
              <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>
                  <nuxt-link to="/">Home</nuxt-link>
                </v-btn>
                <v-menu class="drop-menu" open-on-hover top offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Treatments Offered</v-btn>
                  </template>

                  <v-list>
                    <v-list-tile v-for="(item, index) in items" :key="index">
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
                <v-btn flat>
                  <nuxt-link to="/">Our Services</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/">Hospitals & Doctors</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/">Cost</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/">Medical Visa</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/">Blog</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/">Contact Us</nuxt-link>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-layout>
        </v-container>
      </div>
    </template>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      sideNav: null,
      items: [
        { title: "Cardiology" },
        { title: "Gastroenterology" },
        { title: "Dentistry" },
        { title: "Ayurveda" },
        { title: "Orthopaedics" },
        { title: "Plastic and Reconstructive Surgery" },
        { title: "Gynaecology" },
        { title: "Aesthetic Medicine" },
        { title: "Neurology" },
        { title: "Pulmonary and Respiratory medicine" },
        { title: "Ophthalmology" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
<style scoped>
.medi-header {
  background-color: #1e69b0;
}
.medi-top {
  background-color: #000;
}
.menu-toolbar.theme--light.v-toolbar {
  background-color: #1e69b0;
  box-shadow: none;
}
.top-toolbar.theme--light.v-toolbar, .logo-toolbar.theme--light.v-toolbar {
     box-shadow: none;
     background-color: inherit;
}
/* .logo-container{
    padding-bottom: 0px;
} */
.top-items .theme--light.v-icon{
  color: #fff;
}
.menu-container, .top-container {
  padding: 0px;
}
.menu-toolbar .v-toolbar__items .v-btn {
  color: #fff;
}
body {
  font: 500 13px/1.7 "Open Sans", Arial, sans-serif;
}
.menu-toolbar a {
  color: #fff;
  text-decoration: none;
}
.v-menu__content {
  top: 215px !important;
}
.menu-container .v-btn,
.v-list__tile__title {
  font-size: 13px !important;
}
.logo-items>.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: inherit;

}
.logo-items>.v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
  box-shadow: none;
}
.logo-items>.v-btn {
  text-transform: none;
  cursor:auto;
}
.logo-items .v-btn:hover {
  background-color: inherit;
}
.pa2{
  padding: 8px 16px;
}
.top-container{
  height: 44px!important;
}
</style>
