import axios from 'axios';
import { error } from '../../utils/error';
import router from '../../router/index';
const KEY = 'AIzaSyAJKPrVIn3GTlgwMocSIzcZnXLekbVjbSE';
const TOKEN = 'jwt-token';

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN),
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(TOKEN, token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem(TOKEN);
    },
  },
  actions: {
    async login({ commit, dispatch }, payload) {
      commit('setToken', TOKEN);
      console.log(payload);
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`;
        const { data } = await axios.post(url, { ...payload, returnSecureToken: true });
        commit('setToken', data.idToken);
        console.log(data);
        router.push('/');
      } catch (e) {
        dispatch(
          'setMessage',
          {
            value: error(e.response.data.error.message),
            type: 'danger',
          },
          { root: true },
        );
        throw new Error(e);
      }
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuth(_, getters) {
      return !!getters.token;
    },
  },
};
