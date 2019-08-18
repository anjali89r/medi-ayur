<template>
  <v-container class="pl46 entire">
    <v-layout row wrap>
      <v-flex xs12 md8 class="fix-card">
        <v-carousel hide-delimiters hide-controls style="margin-bottom: 50px;">
          <v-carousel-item v-for="(img,i) in hospitalPackgageInfo[0].packages[0].images" :key="i" :src="img.img"></v-carousel-item>
        </v-carousel>

        <v-toolbar class="package-toolbar">
          <v-toolbar-items id="secondaryTab">
            <v-btn flat class="btns" @click="scrollTo(1)">Overview</v-btn>
            <v-btn class="btns" flat @click="scrollTo(2)">Services Included</v-btn>
            <v-btn class="btns" flat @click="scrollTo(3)">Daily Schedule</v-btn>
            <v-btn class="btns" flat @click="scrollTo(4)">Amenities</v-btn>
            <v-btn class="btns" flat @click="scrollTo(5)">How to get there</v-btn>
            <v-btn class="btns" flat @click="scrollTo(6)">Cancellation Policy</v-btn>
            <v-btn class="btns" flat @click="scrollTo(7)">Reviews</v-btn>
          </v-toolbar-items>
        </v-toolbar>
<v-divider></v-divider>

        <section class="overview mt-20" id="1">
          <h1 class="mb-20 headline">{{hospitalPackgageInfo[0].packages[0].packageTitle}} at {{hospitalPackgageInfo[0].hospitalName}} </h1>
          <p class="display-8 mb-20">{{hospitalPackgageInfo[0].packages[0].packageDescription}}</p>
           <h2 class="mb-20 headline"> About {{hospitalPackgageInfo[0].hospitalName}} </h2>
           <p>{{hospitalPackgageInfo[0].hospitalData.hospitalDescription}}</p>
        </section>
        <v-divider></v-divider>
        <section id="2" class="amenities mt-20 mb-20">
          <h3 class="mb-20 headline">Services Included</h3>
          <div class="amenity-sub">

            <ul class="collection">

                <li v-for="(service, key) in hospitalPackgageInfo[0].packages[0].services"  :key="key">
                  <span class="fa-li"><i class="fas fa-check-square"></i></span>
                {{service.itemDescription}}
                </li>

            </ul>

          </div>
        </section>
        <v-divider></v-divider>
        <section id="3" class="amenities mt-20 mb-20">
          <h3 class="mb-20 headline">Daily Schedule</h3>
          <div class="amenity-sub">

            <ul >

                <li  v-for="(service, key) in hospitalPackgageInfo[0].packages[0].dailyschedule"  :key="key">

                  {{service.scheduleDesc}}
                </li>

            </ul>

          </div>
        </section>
        <v-divider></v-divider>



        <section id="4" class="amenities mt-20">
          <h3 class="mb-20 headline">Amenities</h3>
          <div class="amenity-sub">
            <!-- <h3 class="subheading mb-20">Featured</h3> -->
            <ul class="amenities-list">
              <template v-for="(value, key) in hospitalPackgageInfo[0].amenities">
                <li class="amenity-single pb-16" :key="key" v-if="value">
                  <span class="faicon">
                    <font-awesome-icon :icon="amenityIcon(key)" :style="color=green"/>
                  </span>
                  <div class="amenity-content">{{getKey(key)}}</div>
                </li>
              </template>
            </ul>

          </div>
        </section>
        <v-divider></v-divider>
         <section id="5" class="amenities mt-20 mb-20">

          <h3 class="mb-20 headline">How to get there</h3>
          <div >

           <v-card

    color="#eeeeee"

    max-width="300"
  >
  <v-card-title primary-title>
          <div>
            <div class="headline"><font-awesome-icon :icon='["fas", "plane-departure"]'/> {{hospitalPackgageInfo[0].address.airportdetail.airportCode}}</div>
            <span >{{hospitalPackgageInfo[0].address.airportdetail.airportName}}</span>
            <div>{{hospitalPackgageInfo[0].address.airportdetail.airportdistance}}</div>
          </div>
        </v-card-title>

<v-divider></v-divider>
    <v-card-actions v-if="hospitalPackgageInfo[0].address.airportdetail.airportTransfer === 'Yes'">
      <v-list-tile class="grow">

        <v-list-tile-content>
          <v-list-tile-title> <font-awesome-icon :icon='["fas", "check"]'/> Transfer Included</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-card-actions>
    <v-card-actions v-else>
      <v-list-tile class="grow">

        <v-list-tile-content>
          <v-list-tile-title> <strong>Airport Transport at extra: {{hospitalPackgageInfo[0].address.airportdetail.airportTransfercost}}</strong> </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-card-actions>
  </v-card>

          </div>
        </section>
        <v-divider></v-divider>
        <section id="6" class="reviews mt-20" >
          <h4 class="mb-20 headline">Cancellation Policy</h4>
          <p>{{hospitalPackgageInfo[0].hospitalData.cancellationPolicy}}</p>
        </section>
         <v-divider></v-divider>
        <section class="reviews mt-20" id="7">
          <h4 class="mb-20 headline">Reviews</h4>
          <v-list three-line>
            <template v-for="(review, index) in hospitalPackgageInfo[0].packages[0].reviews">
              <v-list-tile :key="review.customerName" avatar ripple>
                <v-list-tile-content>
                  <v-list-tile-title>{{ review.customerName }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ review.comments }}</v-list-tile-sub-title>
                  <!-- <v-list-tile-sub-title>{{ review.subtitle }}</v-list-tile-sub-title> -->
                  <v-rating
                  class="review-rating hidden-md-and-up"
                    v-model="review.rating"
                    readonly
                    background-color="orange lighten-3"
                    color="orange"
                    small
                  ></v-rating>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-list-tile-action-text>{{ dateConv(review.date) }}</v-list-tile-action-text>
                  <v-rating
                  class="review-rating hidden-sm-and-down"
                    v-model="review.rating"
                    readonly
                    background-color="orange lighten-3"
                    color="orange"
                    small
                  ></v-rating>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider
              class="mt-10"
                v-if="index + 1 < hospitalPackgageInfo[0].packages[0].reviews.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list>
        </section>
      </v-flex>
      <v-flex md3 class="hidden-sm-and-down" style="margin-left: 10px;">
          <BookCard top="20" :hospitalBook="hospitalPackgageInfo[0]" :scroll-y="scrollY" :countrySpecifics="countryInfo? countryInfo : getCountrySpecifics"/>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import { setTimeout } from "timers";
import BookCard from "@/components/BookCard"
export default {
  data() {
    return {
      scrollY: null
    }
  },
  async asyncData({ params, query, error }) {
    let hospPackRes = await axios({
      method: "get",
      url:
        "https://www.medinovita.com/api/v1/ayurvedapackagebyid/meditrip?packageid=" +
        params.packageId,
      headers: {
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVG9rZW5Ub0F1dGhlbnRpY2F0ZU1lZGlub3ZpdGFVc2VyIiwiaWF0IjoxNTA4MDQ0OTMwfQ.cZ3pCte1guE8KQkjd1KfY_bLJ-gOatJm2xlwyiLGAl4",
        Authorization: "Basic bGliaW46bGliaW4=",
        "Content-Type": "application/json"
      }
    })
   if (process.server) {
     console.log("in server packId")
     var countryRes = await axios.get('https://ssl.geoplugin.net/json.gp?k=2c9b4cbf8c7d1a59&base_currency=INR')
     console.log("countryRes in packId: ", countryRes.data)

   }
    return {
       hospitalPackgageInfo: hospPackRes.data,
       countryInfo: {countryCode: countryRes.data.geoplugin_countryCode,
             currencyCode: countryRes.data.geoplugin_currencyCode,
             currencySymbol: countryRes.data.geoplugin_currencySymbol,
             radius: countryRes.data.geoplugin_currencyConverter}
    }
  },

  beforeCreate() {
       if (process.browser) {
   console.log("in packageid process.browser")
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
  },
  mounted() {
    window.addEventListener('scroll', (event) => {
      this.scrollY = Math.round(window.scrollY);
    });
  var header = document.getElementById("secondaryTab");
var btns = header.getElementsByClassName("btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
  },

  components: {
    BookCard
  },

  computed: {
    ...mapGetters({
      getCountrySpecifics: 'userLocation/getCountryDetails',
    })
  },
  methods: {
    scrollTo(id) {
      var elm = document.getElementById(id);
      elm.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      // setTimeout(() => {
      //   window.scrollBy(0, -90);
      // }, 1000);

    },
    dateConv(timeStamp) {
      const timeVar = new Date(timeStamp);
      console.log(typeof timeVar);
      return timeVar.toLocaleDateString();
    },
    amenityIcon(amenity) {
      switch (amenity) {
        case "wifi":
          return ["fas", "wifi"];
          break;
        case "airconditioning":
          return ["fas", "thermometer-empty"];
          break;
        case "environmentalfriendly":
          return ["fas", "leaf"];
          break;
        case "translator":
          return ["fas", "sign-language"];
          break;
        case "pool":
          return ["fas", "swimmer"];
          break;
        default:
          return;
      }
    },
    getKey(key) {
      switch(key) {
        case "airconditioning" :
          return "Air Conditioning";
          break;
        case "environmentalfriendly":
          return "Eco Friendly";
          break;
        default:
          return key;

      }
    }
  }
}
</script>
<style scoped>
.a-box {

  height: 5rem;
  width: 5rem;
  border: 2px solid blue;

}
/* .fix-card{
  position: relative;
} */
.entire {
  font-size: 16px;
}
.pl46 {
  padding-left: 46px;
}
.package-toolbar {
  /* position: sticky; */
  top: 0;
  background-color: #FAFAFA!important;
  z-index: 100;
}

.v-btn{
  padding: 0 14px;
}
.amenities-list {
  margin-left: 24px;
  margin-right: 24px;

}
.headline {
   font: 500 13px/1.7 "Open Sans",Arial,sans-serif;

}

@media screen and (min-width: 688px) {
  .amenities-list {
    column-count: 3;
  column-gap: 32px;
  }
}
.list-unstyled {
  list-style: none;
  padding-left: 0px;
}
.amenity-single {
  display: flex;
  break-inside: avoid;
  page-break-inside: avoid;
}
.pb-16 {
  padding-bottom: 16px;
}

.amenity-content {
  display: inline-block;
  flex: 1;
}
.theme--light.v-toolbar{
  background-color: inherit;
  box-shadow: none;
}


</style>
