/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newID: 6,
    players : [
      {
        id: 1, 
        name: "Amir",
        age : 33,
        strikeRate : 150.5,
        matchesPlayed : 34,
        team: " Karachi Kings",

      },
      {
        id: 2, 
        name: "Sarfaraz",
        age : 39,
        strikeRate : 109,
        matchesPlayed : 20,
        team: " Quetta Gladiators",

      },
      {
        id: 3, 
        name: "Shadab Khan",
        age : 26,
        strikeRate : 148.9,
        matchesPlayed : 28,
        team: " Islamabad United",

      },
      {
        id : 4,
        name: "Babar Azam",
        age : 27,
        strikeRate : 110.5,
        matchesPlayed : 50,
        team: " KarachiKings",

      },
      {
        id : 5,
        name: "Shaheen Afridi",
        age : 22,
        strikeRate : 145.1,
        matchesPlayed : 27,
        team: " Lahore Qalanders",

      },
    ]
  },
  mutations: {
    ADD_PLAYER(state, player) {
      state.players.push({id: state.newID,...player})
      state.newID += 1
    }
  },
  actions: {
    addPlayer({ commit }, player) {
      commit('ADD_PLAYER', player)
    }
  },
  modules: {}
});
