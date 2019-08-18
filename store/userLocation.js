/* eslint-disable */
import axios from 'axios';

export const state = () => ({
   countrySpecifics: {}
 })

 export const mutations = {
    setCountrySpecifics(state, payload) {
      state.countrySpecifics = payload;
      console.log("mutated state geo: ", state)
      localStorage.setItem("countryCode", JSON.stringify(payload))
    },
    reInitialiseState(state) {
       console.log("in reinitialize state with local storage: ", state.countrySpecifics)
      state.countrySpecifics = JSON.parse(localStorage.getItem('countryCode'))
      console.log("json parse: ", JSON.parse(localStorage.getItem('countryCode')))
      console.log("state.countrySpecifics :", state.countrySpecifics)
    }
 }

 export const actions = {
    countryDetails({commit}) {
       axios.get('https://ssl.geoplugin.net/json.gp?k=2c9b4cbf8c7d1a59&base_currency=INR')
       .then(resp => {
          console.log("geo response: ", resp.data);
          const geoData = resp.data
          const countryInfo = {
             countryCode: geoData.geoplugin_countryCode,
             currencyCode: geoData.geoplugin_currencyCode,
             currencySymbol: geoData.geoplugin_currencySymbol,
             radius: geoData.geoplugin_currencyConverter
          }
          commit('setCountrySpecifics', countryInfo)



       })
       .catch(error => {
          console.log(error)
       })
    }
 }

 export const getters = {
    getCountryDetails(state) {
       console.log("getters countrySpecifics state: ", state)
       console.log("getters countrySpecifics state.countrySpecifics: ", state.countrySpecifics)
       return state.countrySpecifics;
    }
 }
