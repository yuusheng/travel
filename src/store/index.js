import { createStore } from 'vuex'
import actions from './actions'

const store = createStore({
  state: () => ({
    user: {
      name: '',
      email: '',
      avatar: '',
      id: '',
    },
    status: false,
  }),
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
