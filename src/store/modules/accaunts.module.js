import store from '..';
import axios from '../../api/request';
import { error } from '../../utils/error';

export default {
  namespaced: true,
  state() {
    return {
      persAccs: [],
    };
  },
  mutations: {
    addAccaunt(state, accaunt) {
      state.persAccs.push(accaunt);
    },
    setAccaunt(state, accaunts) {
      state.persAccs = accaunts;
    },
  },
  actions: {
    async addAccaunts({ dispatch }, payload) {
      console.log(payload);
      try {
        const token = store.getters['auth/token'];
        await axios.patch(
          `/objects/${payload.id}/quarters/${payload.quarterId}.json?auth=${token}`,
          { accaunt: payload.accaunt },
        );
        console.log(payload.accaunt);
        commit('addAccaunt', payload);
      } catch (e) {
        dispatch(
          console.log(e.response),
          'setMessage',
          {
            value: 'Error',
            type: 'danger',
          },
          { root: true },
        );
      }
    },
    // async loadAccaunts({ dispatch }) {
    //   try {
    //     const token = store.getters['auth/token'];
    //     const { data } = await axios.get(`/objects.json?auth=${token}`);

    //     const response = Object.keys(data).map((id) => ({ ...data[id] }));
    //     const q = response.map((item) => console.log(item));
    //     console.log(q);
    //     // const quarters = response.forEach((item) => item.quarters);

    //     // commit('setAccaunt', response.persAccs);
    //   } catch (e) {
    //     dispatch(
    //       'setMessage',
    //       {
    //         value: error(e.response),
    //         type: 'danger',
    //       },
    //       { root: true },
    //     );
    //   }
    // },
  },
  getters: {
    accaunt(state) {
      return state.accaunts;
    },
  },
};
