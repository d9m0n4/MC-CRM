<template>
  <div class="modal">
    <div class="bg-layer" @click="closeModal"></div>
    <form class="modal-group" @submit.prevent="onSubmit">
      <div class="modal-header">
        <div class="modal-title">Добавление объекта управления</div>
        <div class="modal-close-btn" @click="closeModal">
          <img src="../assets/img/icons/close.svg" alt="" />
        </div>
      </div>
      <div class="modal-body">
        <div class="form-field">
          <div class="form-field-row">
            <div class="field-cell">Регион/район</div>
            <div class="field-cell input">
              <VueSuggestions
                :model="region"
                :placeholder="'Начните вводить'"
                :options="{ ...suggestionOptions, bounds: 'region' }"
              >
              </VueSuggestions>
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Город/ н.п.</div>
            <div class="field-cell input">
              <VueSuggestions
                :model="city"
                :placeholder="'Начните вводить'"
                :options="{ ...suggestionOptions, bounds: 'city' }"
              >
              </VueSuggestions>
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Улица</div>
            <div class="field-cell input">
              <VueSuggestions
                :model="street"
                :placeholder="'Начните вводить'"
                :options="{ ...suggestionOptions, bounds: 'street' }"
              >
              </VueSuggestions>
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Дом</div>
            <div class="field-cell input">
              <input type="text" class="suggestions-input" v-model="house" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Площадь</div>
            <div class="field-cell input">
              <input type="text" class="suggestions-input" v-model="area" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Год постройки</div>
            <div class="field-cell input">
              <input type="text" class="suggestions-input" v-model.number="year" />
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-accent btn-large">Добавить</button>
      </div>
    </form>
  </div>
</template>
<script>
import VueSuggestions from 'vue-suggestions';
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import fetchData from '../api/dadataAPI';
import { watch } from '@vue/runtime-core';
export default {
  setup() {
    const store = useStore();

    const region = ref(null);
    const city = ref(null);
    const street = ref(null);
    const house = ref(null);
    const area = ref(null);
    const year = ref(null);
    const response = ref([]);
    const boundType = ref('');

    const closeModal = () => {
      store.commit('closeModal');
    };

    const onSubmit = async () => {
      let data = {
        address: {
          region: region.value,
          city: city.value,
          street: street.value,
          house: house.value,
        },
        area: area.value,
        year: year.value,
        get adr() {
          return Object.values(this.address).join(', ');
        },
      };

      await store.dispatch('objects/addObject', data);

      region.value = null;
      city.value = null;
      street.value = null;
      house.value = null;
      year.value = null;

      closeModal();
    };

    const select = (obj) => {
      console.log(123123);
      region.value = obj;
    };

    watch(region.value, (val) => console.log(val));

    const suggestionOptions = {
      token: '77c78afe2f24aa68ff117d56619132563ed661dc',
      type: 'ADDRESS',
      scrollOnFocus: false,
      triggerSelectOnBlur: true,
      triggerSelectOnEnter: true,
      addon: 'spinner',
      onSelect(suggestion) {
        console.log(suggestion);
      },
    };

    return {
      closeModal,
      region,
      city,
      street,
      house,
      area,
      year,
      onSubmit,
      fetchData,
      response,
      select,
      suggestionOptions,
      boundType,
    };
  },
  components: {
    VueSuggestions,
  },
};
</script>
