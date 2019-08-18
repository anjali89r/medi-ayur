// import axios from "axios";

// //import axios from 'axios';
//  export const state = () => ({
//    filteredHospitals: []
//  })

//  export const mutations = {

//    setUserHosp(state, payload) {

//       state.filteredHospitals = payload
//       console.log("hoorayyyy: ", state)
//    },
//    // settreatmentdays(state, payload) {

//    //    state.filteredHospitals = payload
//    //    console.log("hoorayyyy: ", state)
//    // }
//    }


//    export const actions =  {

//    airportHospitals({commit}, payload) {
//       axios.get('https://www.medinovita.com/api/v1/ayurvedapackage?airport=' + payload)
//          .then(resp => {
//             console.log("resp: ", resp.data)
//             commit('setUserHosp', resp.data);
//          })
//          .catch(error => {
//             console.log(error)
//             this.errored = true
//           })

//    },

//    treatmentdays({commit}, payload) {
//       axios.get('https://www.medinovita.com/api/v1/ayurvedapackage?treatmentdays=' + payload)
//          .then(resp => {
//             console.log("resp: ", resp.data)
//             commit('setUserHosp', resp.data);
//          })
//          .catch(error => {
//             console.log(error)
//             this.errored = true
//           })

//    },
//    fullDetails({commit}, payload) {
//       //payload: {airport: '', days: ''}
//       axios.get('https://www.medinovita.com/api/v1/ayurvedapackage?airport=' + payload.airport + '&treatmentdays=' + payload.days)
//          .then(resp => {
//             console.log("fullDetailresp: ", resp.data)
//             commit('setUserHosp', resp.data);
//          })
//          .catch(error => {
//             console.log(error)
//             this.errored = true
//           })

//    }
// }

// export const getters = {
//    getCityHosp(state) {
//       return state.filteredHospitals;
//    },
//    // getTreatmentDays(state) {
//    //    return state.filteredHospitals;
//    // }
// }

/* eslint-disable no-shadow */
/* eslint-disable quotes */
// import Vuex from 'vuex';

// import axios from 'axios';

// export const state = () => ({
//    ayurvedicPackages: [],
//    userConvenience: [{userAirport: '', userDays: ''}],
//  })
//  export const mutations = {
//    // eslint-disable-next-line no-shadow
//    setPackages(state, payload) {
//       //{apiResp: resp.data, userAirport: payload}
//       console.log("in modules:")
//       state.ayurvedicPackages = payload  //[{}, {}]
//       console.log("in modules: ", state)
//    }
// }
// export const actions = {
//    nuxtServerInit(vueContext, context) {

//       return axios.get('https://www.medinovita.com/api/v1/ayurvedapackage')
//          .then(resp => {
//             console.log("in serverinit")
//             console.log('response in init: ')
//             //localStorage.setItem('ayur-hospitals', JSON.stringify(resp))
//             return vueContext.commit('setPackages', resp.data)
//             //console.log('response send to mutation:')
//          })
//          .catch( e => context.error(e))
//    },
//    airportHospitals({commit}, payload) {
//       axios.get('https://www.medinovita.com/api/v1/ayurvedapackage?airport=' + payload)
//          .then(resp => {
//             console.log("resp: ", {apiResp: resp.data, userAirport: payload})
//             commit('setPackages', {apiResp: resp.data, userAirport: payload});
//          })
//          .catch(error => {
//             console.log(error)
//             this.errored = true
//           })

//    },
//    treatmentdays({commit}, payload) {
//       axios.get('https://www.medinovita.com/api/v1/ayurvedapackage?treatmentdays=' + payload)
//          .then(resp => {
//             console.log("resp: ", resp.data)
//             commit('setPackages', resp.data);
//          })
//          .catch(error => {
//             console.log(error)
//             this.errored = true
//           })

//    },
//    fullDetails({commit}, payload) {
//       //payload: {airport: '', days: ''}
//       axios.get('https://www.medinovita.com/api/v1/ayurvedapackage?airport=' + payload.airport + '&treatmentdays=' + payload.days)
//          .then(resp => {
//             console.log("fullDetailresp: ", resp.data)
//             commit('setPackages', resp.data);
//          })
//          .catch(error => {
//             console.log(error)
//             this.errored = true
//           })

//    }
// }

// export const getters = {
//    getPackages(state) {
//       return state.ayurvedicPackages;
//    }
// }
