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
        await axios.post(`/objects.json?auth=${token}`, object);
        console.log(object);
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
        const response = Object.keys(data).map((id) => ({
          ...data[id],
          id,
          quarters: data[id].quarters || [],
        }));

        commit('setObject', response);
      } catch (e) {
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
    async loadOneObject({ commit, dispatch }, id) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.get(`/objects/${id}.json?auth=${token}`);
        return data;
      } catch (e) {
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

    async updateObject({ commit, dispatch }, data) {
      try {
        const token = store.getters['auth/token'];
        await axios.put(`/objects/${data.id}.json?auth=${token}`, { ...data });
        console.log(data);
      } catch (e) {
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
