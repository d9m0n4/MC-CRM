import { createStore } from 'vuex';
import auth from './modules/auth.module';
export default createStore({
  state() {
    return {
      message: '',
    };
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
    clearMessage(state) {
      state.message = null;
    },
  },
  actions: {
    async setMessage({ commit }, payload) {
      commit('setMessage', payload);
      setTimeout(() => {
        commit('clearMessage');
      }, 3000);
    },
  },
  getters: {
    message(state) {
      return state.message;
    },
  },
  modules: {
    auth,
  },
});
