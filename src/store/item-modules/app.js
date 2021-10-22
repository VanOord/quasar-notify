/* eslint-disable no-param-reassign */

export default {
  namespaced: true,

  state: {
    status: 'loading',
    statusDetails: '',
    versions: { frontend: '?.?.?', backend: '?.?.?' },
  },

  getters: {
    status(state) {
      return state.status
    },
    statusDetails(state) {
      return state.statusDetails
    },
    versions(state) {
      return state.versions
    },
  },

  mutations: {
    setStatus(state, { status, details }) {
      state.status = status
      state.statusDetails = details
    },
  },
}
