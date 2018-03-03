import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      header: undefined,
      footer: undefined
    },
    mutations: {
      initialize (state, {header, footer}) {
        state.header = header
        state.footer = footer
      }
    }
  })
}

export default createStore