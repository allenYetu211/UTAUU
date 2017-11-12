import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {
      setInit(state, param) {
        Object.keys(param).map((e) => {
          state[e] = param[e]
        })
      }
    }
  })
}

export default createStore
