<template>
  <div class="modal">
    <div class="bg-layer" @click="$emit('close')"></div>
    <app-message />
    <form class="modal-group" @submit.prevent="onSubmit">
      <div class="modal-header">
        <div class="modal-title">Добваить помещение</div>
        <div class="modal-close-btn" @click="$emit('close')">
          <img src="../../assets/img/icons/close.svg" alt="" />
        </div>
      </div>
      <div class="modal-body">
        <div class="form-field">
          <div class="form-field-row">
            <div class="field-cell">Адрес</div>
            <div class="field-cell select">
              <vue-select
                v-model="obj"
                :options="objects"
                label-by="fullAddress"
                value-by="fullAddress"
                :empty-model-value="''"
                :placeholder="'Выберите объект'"
                :close-on-select="true"
              />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Помещение</div>
            <div class="field-cell input">
              <input required type="text" class="form-input" v-model="flatNum" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Площадь</div>
            <div class="field-cell input">
              <input required type="text" class="form-input" v-model="flatArea" />
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
import AppMessage from '../../components/AppMessage.vue';
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import VueNextSelect from 'vue-next-select';

export default {
  setup() {
    const store = useStore();

    const objects = computed(() => store.getters['objects/objects']);

    const obj = ref('');
    const flatNum = ref('');
    const flatArea = ref('');

    onMounted(async () => {
      await store.dispatch('objects/loadObjects');
      console.log(objects.value);
    });

    const onSubmit = async () => {
      obj.value.quarters.forEach((el) => {
        if (el.flatNum === flatNum.value) {
          store.commit('setMessage', { type: 'danger', value: 'Квартира уже есть!' });
          flatNum.value = '';
        }
      });

      // const oneObject = obj.value;
      // oneObject.quarters.push({
      //   flatNum: flatNum.value,
      //   flatArea: flatArea.value,
      // });
      // await store.dispatch('objects/updateObject', oneObject);
      // flatArea.value = '';
      // flatNum.value = '';
    };

    const options = [
      { language: 'JavaScript', framework: 'Express' },
      { language: 'Python', framework: 'Django' },
      { language: 'PHP', framework: 'Laravel' },
    ];

    return {
      objects,
      obj,
      flatNum,
      flatArea,
      onSubmit,
      options,
    };
  },
  components: {
    AppMessage,
    'vue-select': VueNextSelect,
  },
};
</script>
