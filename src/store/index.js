import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: {
        name: '',
        email: '',
        avatar: '',
        token: '',
      },
      status: false,
    }
  },
  mutations: {
    login(state, user) {
      state.user = user
      state.status = true
    },
    logout(state) {
      state.user = {}
      state.status = false
    },
  },
})

export default store
