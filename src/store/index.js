import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      homeCounter: 0,
      siteCounter: 0,
      applicationsCounter: 0,
      aboutCounter: 0,
      settingsCounter: 0
    }
  },
  mutations: {
    increment(state, {id} ){
      state[id] += 1
    }
  },
  actions: {
  },
  modules: {
  }
})


