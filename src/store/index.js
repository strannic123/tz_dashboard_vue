import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      homeCounter: 0,
      siteCounter: 0,
      applicationsCounter: 0,
      aboutCounter: 0,
      settingsCounter: 0,
      users: [
        { id: 1,
          name: 'Billi',
          typeUser: 'Администратор',
          baned: false
        },
        { id: 2,
          name: 'Barth',
          typeUser: 'Модератор',
          baned: false
        },
        { id: 3,
          name: 'Martha',
          typeUser: 'Пользователь',
          baned: false
        },

      ]
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


