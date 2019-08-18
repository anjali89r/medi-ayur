/* eslint-disable no-shadow */
/* eslint-disable quotes */
// import Vuex from 'vuex';

import axios from 'axios';

export const state = () => ({
   ayurvedicPackages: [],
   userConvenience: {userAirport: null, userDays: null}
 })
 export const mutations = {
   // eslint-disable-next-line no-shadow
   setPackages(state, payload) {
      //{apiResp: resp.data, userAirport: payload, , userDays: null}
      console.log("in modules:")
      state.ayurvedicPackages = payload.apiResp  //[{}, {}]
      state.userConvenience.userAirport = payload.userAirport;
      state.userConvenience.userDays = payload.userDays
      console.log("in modules: ", state)
   }
}
export const actions = {
   nuxtServerInit(vueContext, context) {
      return axios({
         method: 'get',
         url: 'https://www.medinovita.com/api/v1/ayurvedapackage/meditrip',
         headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVG9rZW5Ub0F1dGhlbnRpY2F0ZU1lZGlub3ZpdGFVc2VyIiwiaWF0IjoxNTA4MDQ0OTMwfQ.cZ3pCte1guE8KQkjd1KfY_bLJ-gOatJm2xlwyiLGAl4',
      Authorization: 'Basic bGliaW46bGliaW4=',
      'Content-Type': 'application/json'

      }
      })
         .then(resp => {
            //console.log("in serverinit")
            //console.log('response in init: ')
            //console.log("server local storestate: ", context.store.state)
            //localStorage.setItem('ayur-hospitals', JSON.stringify(resp))
            return vueContext.commit('setPackages', {apiResp: resp.data, userAirport: null, userDays: null})
            //console.log('response send to mutation:')
         })
         .catch( e => context.error(e))
   },
   totalHospitals({commit}) {

      axios({
         method: 'get',
         url: 'https://www.medinovita.com/api/v1/ayurvedapackage/meditrip&country=',
         headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVG9rZW5Ub0F1dGhlbnRpY2F0ZU1lZGlub3ZpdGFVc2VyIiwiaWF0IjoxNTA4MDQ0OTMwfQ.cZ3pCte1guE8KQkjd1KfY_bLJ-gOatJm2xlwyiLGAl4',
      Authorization: 'Basic bGliaW46bGliaW4=',
      'Content-Type': 'application/json'

      }
      })
         .then(resp => {
            console.log("totalHospitals respdata: ", resp.data)
            console.log("totalHospitals: ", {apiResp: resp.data, userAirport: null, userDays: null})
            commit('setPackages', {apiResp: resp.data, userAirport: null, userDays: null});
         })
         .catch(error => {
            console.log(error)
            this.errored = true
          })
   },
   airportHospitals({commit}, payload) {
      console.log("server local: ", localStorage)
      console.log("airport in dispatch", payload)
      axios({
         method: 'get',
         url: 'https://www.medinovita.com/api/v1/ayurvedapackage/meditrip?airport=' + payload.mycity,
         headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVG9rZW5Ub0F1dGhlbnRpY2F0ZU1lZGlub3ZpdGFVc2VyIiwiaWF0IjoxNTA4MDQ0OTMwfQ.cZ3pCte1guE8KQkjd1KfY_bLJ-gOatJm2xlwyiLGAl4',
      Authorization: 'Basic bGliaW46bGliaW4=',
      'Content-Type': 'application/json'

      }
      })
         .then(resp => {
            console.log("respdata: ", resp.data)
            console.log("resp: ", {apiResp: resp.data, userAirport: payload})
            commit('setPackages', {apiResp: resp.data, userAirport: payload.mycity, userDays: null});
         })
         .catch(error => {
            console.log(error)
            this.errored = true
          })

   },
   treatmentdays({commit}, payload) {
      axios({
         method: 'get',
         url: 'https://www.medinovita.com/api/v1/ayurvedapackage/meditrip?treatmentdays=' + payload.days,
         headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVG9rZW5Ub0F1dGhlbnRpY2F0ZU1lZGlub3ZpdGFVc2VyIiwiaWF0IjoxNTA4MDQ0OTMwfQ.cZ3pCte1guE8KQkjd1KfY_bLJ-gOatJm2xlwyiLGAl4',
      Authorization: 'Basic bGliaW46bGliaW4=',
      'Content-Type': 'application/json'

      }
      })
         .then(resp => {
            console.log("resp: ", resp.data)
            commit('setPackages', {apiResp: resp.data, userAirport: null, userDays: payload.days});
         })
         .catch(error => {
            console.log(error)
            this.errored = true
          })

   },
   fullDetails({commit}, payload) {
      //payload: {airport: '', days: ''}
      console.log("payload in full detials: ", payload)
      axios({
         method: 'get',
         url: 'https://www.medinovita.com/api/v1/ayurvedapackage/meditrip?airport=' + payload.airport + '&treatmentdays=' + payload.days,
         headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVG9rZW5Ub0F1dGhlbnRpY2F0ZU1lZGlub3ZpdGFVc2VyIiwiaWF0IjoxNTA4MDQ0OTMwfQ.cZ3pCte1guE8KQkjd1KfY_bLJ-gOatJm2xlwyiLGAl4',
      Authorization: 'Basic bGliaW46bGliaW4=',
      'Content-Type': 'application/json'

      }
      })
         .then(resp => {
            console.log("fullDetailresp: ", resp.data)
            commit('setPackages', {apiResp: resp.data, userAirport: payload.airport, userDays: payload.days});
         })
         .catch(error => {
            console.log(error)
            this.errored = true
          })

   }
}

export const getters = {
   getPackages(state) {
      return state.ayurvedicPackages;
   },
   getUserPreferences(state) {
      return state.userConvenience;
   }
}
