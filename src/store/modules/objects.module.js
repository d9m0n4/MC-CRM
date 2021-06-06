import store from '..';
import axios from '../../api/request';
import { error } from '../../utils/error';

export default {
  namespaced: true,
  state() {
    return {
      objects: [],
    };
  },
  mutations: {
    addObject(state, object) {
      state.objects.push(object);
    },
    setObject(state, objects) {
      state.objects = objects;
    },
  },
  actions: {
    async addObject({ commit, dispatch }, object) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.post(`/objects.json?auth=${token}`, object);
        console.log(data);
        commit('addObject', object);
      } catch (e) {
        dispatch(
          'setMessage',
          {
            value: error(e.response.data.error.message),
            type: 'danger',
          },
          { root: true },
        );
      }
    },
    async loadObjects({ commit, dispatch }) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.get(`/objects.json?auth=${token}`);
        const response = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit('setObject', response);
      } catch (e) {
        console.log(e.response);
        dispatch(
          'setMessage',
          {
            value: error(e.response),
            type: 'danger',
          },
          { root: true },
        );
      }
    },
  },

  getters: {
    objects(state) {
      return state.objects;
    },
  },
};
