<template>
<div>
  <v-img
    class="mb-15"
    src="https://res.cloudinary.com/ddglp4e0g/image/upload/v1558891875/homepage/ayurvedaheader2.png"
  ></v-img>

  <v-container class="px-0">
    <v-divider></v-divider>
    <v-layout row wrap class="filter-bar">

        <h4 class="custom-h4">Filter By: </h4>

      <v-flex xs12 md2 xl2>
        <v-layout row wrap>
           <v-menu v-model="cityMenu" :close-on-content-click="false" :nudge-width="200" offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span v-if="airportCity">{{airportCity}}</span><span v-else>Nearest Airport</span>

              <i aria-hidden="true" class="v-icon material-icons theme--light">keyboard_arrow_down</i>
            </v-btn>
          </template>

          <v-card>
            <v-divider></v-divider>

            <v-list>

              <v-list-tile>
                <v-list-tile-action>
                  <v-switch v-model="airportCity" color="purple" label="Cochin" value="Cochin"></v-switch>
                  <!-- <v-switch v-model="cochin" color="purple"></v-switch> -->
                </v-list-tile-action>
                <!-- <v-list-tile-title>Cochin</v-list-tile-title> -->
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="airportCity"
                    color="purple"
                    label="Trivandrum"
                    value="Trivandrum"
                  ></v-switch>
                  <!-- <v-switch v-model="trivandrum" color="purple"></v-switch> -->
                </v-list-tile-action>
                <!-- <v-list-tile-title>Trivandrum</v-list-tile-title> -->
              </v-list-tile>
            </v-list>

            <v-card-actions>
              <!-- <v-spacer></v-spacer> -->

              <!-- <v-btn flat @click="cityMenu = false">Cancel</v-btn> -->
              <v-btn color="primary" flat @click="saveCity">Apply</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
        <!-- <v-chip  v-show="airportCity" label color="teal" text-color="white">
          <v-icon left>label</v-icon>{{airportCity}}
        </v-chip> -->
        </v-layout>


      </v-flex>

      <v-flex xs12 md2 xl2>
        <v-layout row wrap>
           <v-menu v-model="daysMenu" :close-on-content-click="false" :nudge-width="200" offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span v-if="numOfDays">{{numOfDays}}</span><span v-else>No. of Days</span>

              <i aria-hidden="true" class="v-icon material-icons theme--light">keyboard_arrow_down</i>
            </v-btn>
          </template>

          <v-card>
            <v-divider></v-divider>

            <v-list>
              <v-list-tile v-for="(day, n) in dayList" :key="n">
                <v-list-tile-action>
                  <v-switch v-model="numOfDays" color="purple" :label="day" :value="day"></v-switch>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <v-card-actions>
              <!-- <v-spacer></v-spacer> -->

              <!-- <v-btn flat @click="daysMenu = false">Cancel</v-btn> -->
              <v-btn color="primary" flat @click="saveDays">Apply</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
        <!-- <v-chip  v-show="numOfDays" label color="teal" text-color="white">
          <v-icon left>label</v-icon>{{numOfDays}}
        </v-chip> -->

        </v-layout>

      </v-flex>


    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap class="mt-10">
      <v-flex xs12>
        <v-layout column>
          <v-flex xs12 sm6>
            <!-- <v-card class="main-card"> -->
              <v-container fluid grid-list-lg>
                <v-layout row wrap v-if="sliced">
                  <template v-for="(hospital, ind) in sliced">
                    <v-flex
                      xs12
                      sm6
                      md6
                      lg4
                      v-for="(item, index) in hospital.packages"
                      :key="item.packageId"
                    >
                      <!-- <p>no city selected</p> -->
                      <Card
                        :hospital="hospital"
                        :packageOffer="item"
                        :countrySpecifics="countryInfo? countryInfo : getCountrySpecifics"
                        @click.native="packageInfo(item)"
                      />
                    </v-flex>
                  </template>
                </v-layout>

              </v-container>

            <!-- </v-card> -->
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
//import infiniteScroll from 'vue-infinite-scroll';
import { mapGetters } from "vuex";
import axios from 'axios';
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      offset: 3, // items to display after scroll
      display: 3, // initial items
      trigger: 300, // how far from the bottom to trigger infinite scroll
      //  hospitalPackages  : [],    // server response data
      end: false, // no more resources,
      cityMenu: false,
      daysMenu: false,
      // cochin: false,
      // trivandrum: false,
      filteredairport: [],
      filteredDay: [],
      //airportSel: false,
      airportCity: null,
      numOfDays: null,
      // daySel: false,
      showAirportTag: false,
      showDayTag: false,
      dayList: ["7", "14", "21", "28"],

    };
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    if(process.server) {
    return axios.get('https://ssl.geoplugin.net/json.gp?k=2c9b4cbf8c7d1a59&base_currency=INR')
       .then(resp => {
          console.log("async data: ", resp.data);
          const geoData = resp.data
          const countryInfo = {
             countryCode: geoData.geoplugin_countryCode,
             currencyCode: geoData.geoplugin_currencyCode,
             currencySymbol: geoData.geoplugin_currencySymbol,
             radius: geoData.geoplugin_currencyConverter
          }
          console.log("asyncdata country info:", countryInfo)
          return {countryInfo};
       })
       .catch(error => {
          console.log(error)
       })
    }
    else {
      console.log("running in async browser")
    }
  },
  beforeCreate() {
       if (process.browser) {
   console.log("in process.browser")
   /*if(!localStorage){dispatch action}
   else {set state to localstorsge}
   */
  if(localStorage.getItem('countryCode')) {
    console.log("localstorage set ")
    this.$store.commit('userLocation/reInitialiseState');
    //this.$store.state.userLocation.countrySpecifics = JSON.parse(localStorage.getItem('countryCode'))
  }
  else {
    console.log("no localstorage set")
     this.$store.dispatch('userLocation/countryDetails');
  }

 }
// else {
//   console.log("in server on created phase")
//    axios.get('https://ssl.geoplugin.net/json.gp?k=2c9b4cbf8c7d1a59&base_currency=INR')
//        .then(resp => {
//           console.log("geo response: ", resp.data);
//           const geoData = resp.data
//           const countryInfo = {
//              countryCode: geoData.geoplugin_countryCode,
//              currencyCode: geoData.geoplugin_currencyCode,
//              currencySymbol: geoData.geoplugin_currencySymbol,
//              radius: geoData.geoplugin_currencyConverter
//           }
//           this.countryInfo = countryInfo;
// console.log("this.countryInfo in server created: ", this.countryInfo)


//        })
//        .catch(error => {
//           console.log(error)
//        })


// }
  },

  mounted() {

    // track scroll event
    this.scroll();
  },
  created() {
    // console.log("created: ", this.$store.getters.getUserPreferences.userAirport);



  },
  computed: {
    sliced() {
      //console.log("sliced: "+ this.hospitalPackages.slice(0, this.display))
      //this.hospitalPackages = this.$store.getters.getPackages
      //both are unselected
      this.airportCity = this.getUserPreferences.userAirport
      this.numOfDays = this.getUserPreferences.userDays
      return this.hospitalPackages.slice(0, this.display);
    },

    ...mapGetters({
      getCountrySpecifics: 'userLocation/getCountryDetails',
      hospitalPackages: "getPackages",
      getUserPreferences: "getUserPreferences",
    })
  },
  methods: {
    scroll() {
      window.onscroll = ev => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - this.trigger
        ) {
          if (this.display < this.hospitalPackages.length) {
            this.display = this.display + this.offset;
          } else {
            this.end = true;
          }
        }
      };
    },
    packageInfo(hospPack) {
      console.log("clicking card: ", hospPack.packageTitle);
      // this.$router.push("/ayurveda/" + hospPack.packageTitle.replace(/\s+/g, '-').toLowerCase() +
      //  hospPack.packageId);
      this.$router.push("/ayurveda/" +hospPack.packageId)
    },
    saveCity() {
      this.cityMenu = false;
       this.showAirportTag = true;
      console.log("numOfDays: ", this.numOfDays)
      if (this.numOfDays && this.airportCity) {
        console.log("inside day & city")
        //this.airportSel = true;

        this.$store.dispatch("fullDetails", {
          airport: this.airportCity,
          days: this.numOfDays
        });
      }
      //console.log("days: ", this.daySel)
    else if (this.numOfDays && !this.airportCity) {
       //this.airportSel = false;
      console.log("day is selected but no airport in airportsave")
      this.$store.dispatch("treatmentdays", {days: this.numOfDays});
    }
      else {
        if (this.airportCity) {
          //this.airportSel = true;
          console.log("no day but city selected: ", this.numOfDays);
          this.$store.dispatch("airportHospitals", {mycity: this.airportCity});
        } else {
          console.log("no city selected and day sel")
         // this.airportSel = false;
          this.$store.dispatch("totalHospitals");
        }
      }
    },

    saveDays() {
      this.daysMenu = false;
      //console.log("airport: ", this.airportSel)
      //console.log("in save days: ",this.numOfDays )
      this.showDayTag = true;
      if (this.airportCity && this.numOfDays) {
        //this.daySel = true;
        this.$store.dispatch("fullDetails", {
          airport: this.airportCity,
          days: this.numOfDays,

        });
      }
      else if (this.airportCity && !this.numOfDays) {
        //this.daySel = false;
      console.log("airport is selected but no dyas in dayssave")
     this.$store.dispatch("airportHospitals", {mycity: this.airportCity});
    }
      else {
        if (this.numOfDays) {
          //this.daySel = true;
          this.$store.dispatch("treatmentdays", {days: this.numOfDays});
        } else {
          console.log("no city selected and day sel")
          //this.daySel = false;
          this.$store.dispatch("totalHospitals");
        }
      }
    }
  }
};
</script>
<style scoped>
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}
.main-card {
  background-color: inherit;
}
.filter-bar {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;
  /* border-top: 1px solid #ddddde;
  border-bottom: 1px solid #ddddde; */
  z-index: 999;
  position: relative;
  margin-bottom: 20px;
}
.ml-30 {
  margin-left: 30px;
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: inherit;
}
.v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
  box-shadow: none;
}
h4.custom-h4 {
  border-left: 1.5px solid grey!important;
  padding-left: 5px!important;
  font-size: 14px!important;
}
.v-chip{
  margin: 10px!important;
}
</style>
