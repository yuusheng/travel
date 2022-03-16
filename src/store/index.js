import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: {
        name: 'yuusheng',
      },
    }
  },
  mutations: {
    changeState(state) {},
  },
})

export default store
