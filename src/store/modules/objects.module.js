import store from '..';
import axios from '../../api/request';

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
    async addObject({ commit }, object) {
      const token = store.getters['auth/token'];
      const { data } = await axios.post(`/objects.json?auth=${token}`, object);
      console.log(data);
      commit('addObject', object);
    },
    async loadObjects({ commit }) {
      const token = store.getters['auth/token'];
      const { data } = await axios.get(`/objects.json?auth=${token}`);
      const response = Object.keys(data).map((id) => ({ ...data[id], id }));
      commit('setObject', response);
    },
  },

  getters: {
    objects(state) {
      return state.objects;
    },
  },
};
