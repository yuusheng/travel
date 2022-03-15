import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: {
        userName: 'yuusheng',
      },
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})

export default store
