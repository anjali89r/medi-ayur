<template>
    <v-card height="100%" class="hosp-card">
        <v-img
          class="white--text"
          height="200px"
          :src="imgSrc"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <!-- <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex> -->
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>

            <span class="treatment--text">{{packageOffer.packageTitle}}</span><br>
            <span class="custom--text">{{hospital.hospitalName}}</span><br>

          </div>
        </v-card-title>
        <v-card-text>
           <p class="packagebrief--text">
             <!-- {{hospital.hospitalData.hospitalDescription.split(" ").splice(0, 57).join(" ")}} -->

           </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="action-button">

          <v-btn flat color="#001959">from {{countrySpecifics.currencySymbol}}{{Math.floor(packageOffer.cost[0].costPrice * countrySpecifics.radius)}}</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat >

            Book Now</v-btn>
        </v-card-actions>
      </v-card>
</template>
<script>
export default {
  props: ['hospital', 'packageOffer', 'countrySpecifics'],
  data() {
    return {
      imgSrc: this.hospital.hospitalimage
    }
  }
}
</script>

<style scoped>
.custom--text{
   font-weight: 600;
   color:#001959;
   font-size: 16px;
   letter-spacing: 1px

}
.treatment--text{
   font-weight: 500;
   color:#2a4049;
   text-transform: uppercase;
}
.packagebrief--text{
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: -10px;
  letter-spacing: 1px

}
.hosp-card.v-card {
  border-radius: 5px;
}
.hosp-card:hover {
  cursor: pointer;
}
.action-button .v-btn{
  color:#001959;
  font-size: 16px;
}
</style>
