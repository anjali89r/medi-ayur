    <template>
    <div>
      <div class="medi-top">
        <v-container class="top-container">
          <v-layout row wrap>
            <v-toolbar class="top-toolbar">
              <v-toolbar-items class="top-items">
                <span><font-awesome-icon   :icon='["fab", "instagram"]'/></span>

                <span class="ml-30"><font-awesome-icon  :icon='["fab", "facebook-f"]'/></span>

                <span class="ml-30"><font-awesome-icon  :icon='["fab", "twitter"]'/></span>
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
                <v-img src="../assets/images/medinovitalogo.png" width="130" alt="Medinovita" aria-label="Medinovita Logo"></v-img>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items class="logo-items hidden-sm-and-down">
                 <v-icon color="#0069B0">mail</v-icon><div class="info-details" ><span>Email Us</span><br><a class="link-color" href="care@medinovita.com">care@medinovita.com</a></div>

               <v-icon class="call-info" color="#0069B0">phone</v-icon><div class="info-details" ><span >Get A CALLBACK</span><br><span class="link-color">+91-9740177277</span></div>



                <!-- <v-btn><v-icon>phone</v-icon>Get A CALLBACK<br>+91-9740177277</v-btn> -->
              </v-toolbar-items>
               <v-toolbar-items class="logo-items hidden-md-and-up">


               <v-icon color="#0069B0">phone</v-icon><div class="info-details" ><span>+91-9740177277</span></div>



                <!-- <v-btn><v-icon>phone</v-icon>Get A CALLBACK<br>+91-9740177277</v-btn> -->
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
                <router-link to="/treatments-offered-for-international-patients.html" >Treatments Offered</router-link>
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
              <router-link to="/ourservices">Our Services</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/hospitaldoctors.html">Hospitals & Doctors</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/medical-visa-to-india.html">Medical Visa</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/blog">Blog</router-link>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>
              <router-link to="/contact.html">Contact Us</router-link>
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
                    <v-btn class="dropdown-link" dark v-on="on">Treatments Offered</v-btn>
                  </template>

                  <v-list>
                    <v-list-tile v-for="(item, index) in items" :key="index">
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
                <v-btn flat>
                  <nuxt-link to="/ourservices">Our Services</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/hospitaldoctors.html">Hospitals & Doctors</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/ayurveda">Ayurveda</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/medical-visa-to-india.html">Medical Visa</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/blog">Blog</nuxt-link>
                </v-btn>
                <v-btn flat>
                  <nuxt-link to="/contact.html">Contact Us</nuxt-link>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-layout>
        </v-container>
      </div>
      </div>
    </template>



<script>
export default {
   name: 'nav-bar',
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
.v-btn{
  text-transform: none;
}
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

.menu-toolbar a {
  color: #fff;
  text-decoration: none;
}
.v-menu__content {
  top: 192px !important; /*215px */
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
  height: 34px!important;
}
.info-details {
  margin-top: 13px;
  margin-left: 5px;
  font-size: 12px;
}
.info-details span {
  text-transform: uppercase;
  font-weight: 500;
}
.info-details .link-color {
  color: #005a5c;
  font-size: 13px;
  text-decoration: none;
  font-weight: 600;
}
.call-info {
  margin-left: 17px;
}
.svg-inline--fa{
  margin-top: 10px;
  color: #fff;
}

.v-menu__content {
  z-index: 1000!important;
}
.dropdown-link{
  background-color: #1E69B0 !important;
  border-color: #1E69B0 !important;
  box-shadow: none !important;
}
</style>
