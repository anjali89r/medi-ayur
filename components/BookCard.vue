<template>
   <v-card class="fix-card"  :style="myStyle">
               <v-card-text primary-title>
                <div>
                  <div class="headline">
                    {{countrySpecifics.currencySymbol}} {{Math.floor(selectedStay.price * countrySpecifics.radius)}}</div>
                  <!-- {{costdropdown}} -->
                  <v-divider class="mt-20 mb-20"></v-divider>
                  <!-- <label for="stay">Room Type</label> -->
                   <v-select
                   id="stay"
                   v-model="selectedStay"
                     :items="costdropdown"
                     item-text="room"
                     item-value="price"
                     label="Room Type"

                     return-object


        ></v-select>
        <v-select

                   v-model="guestSel"
                     :items="guestdropdown"

                     label="Guests"




        ></v-select>

                  <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="Check-in"

                persistent-hint
                prepend-icon="event"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>
          <!-- <p>Date in ISO format: <strong>{{ parseDate(dateFormatted) }}</strong></p> -->
                </div>
              </v-card-text>


                <v-card-actions>

                  <v-btn round color="#038CC3" class="white-text" style="margin-bottom:20px;margin-left: auto;margin-right: auto;" large>
                    Request to Book
                  </v-btn>


                </v-card-actions>
              </v-card>
</template>
<script>
   export default {
      props: ['top', 'scrollY', 'hospitalBook', 'countrySpecifics'],
      data() {
        return {
          myStyle: {},
          originalTop: 0,
          selectedStay: {price: 1800, room: "Maharaja Suite"},
          costdropdown: this.hospitalBook.packages[0].cost.map(item => {
             return {price: item.costPrice, room: item.roomType}
          }),
          guestdropdown: [1, 2, 3, 4],
          guestSel: null,
          date: new Date().toISOString().substr(0, 10),
    dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
        }
      },
      mounted() {
        this.originalTop = this.$el.getBoundingClientRect().top;

      },
      watch: {
        // scrollY(newValue) {
        //   const rect = this.$el.getBoundingClientRect();
        //   const newTop = this.scrollY + +this.top - this.originalTop;

        //   if (newTop > 0) {
        //     this.$set(this.myStyle, 'top', `${newTop}px`);
        //   } else {
        //     this.$delete(this.myStyle, 'top');
        //   }
        // },
        date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
   },
   methods: {
      formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
   }
   }
</script>
<style scoped>
.fix-card{
  /* position: relative; */
  position: sticky;
  top: 0rem;
}
label {
   font-size: 12px;
   line-height: 1.33em;
   color: rgb(72, 72, 72);
}
</style>

