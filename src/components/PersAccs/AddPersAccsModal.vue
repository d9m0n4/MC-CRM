<template>
  <div class="modal">
    <div class="bg-layer" @click="$emit('close')"></div>
    <app-message />
    <form class="modal-group" @submit.prevent="onSubmit">
      <div class="modal-header">
        <div class="modal-title">Добваить лицевой счет</div>
        <div class="modal-close-btn" @click="$emit('close')">
          <img src="../../assets/img/icons/close.svg" alt="" />
        </div>
      </div>
      <div class="modal-body">
        <div class="form-field">
          <div class="form-field-row">
            <div class="field-cell">Адрес</div>
            <div class="field-cell select">
              <select v-model="obj">
                <option disabled>Выберите объект</option>
                <option
                  class="option"
                  :value="object"
                  v-for="(object, index) in objects"
                  :key="index"
                  >{{
                    object.address.city + ' ' + object.address.street + ' ' + object.address.house
                  }}</option
                >
              </select>
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Помещение</div>
            <div class="field-cell select">
              <select v-model="quarterId">
                <option disabled>Выберите помещение</option>
                <option
                  class="option"
                  :value="quarterId"
                  v-for="(quarter, quarterId) in quarters"
                  :key="quarterId"
                  >{{ quarter.flatNum }}</option
                >
              </select>
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">ФИО собственника</div>
            <div class="field-cell input">
              <input required type="text" class="form-input" v-model="fio" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Наименование ЛС</div>
            <div class="field-cell input">
              <input required type="text" class="form-input" v-model="persAcc" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">E-mail</div>
            <div class="field-cell input">
              <input required type="text" class="form-input" v-model="email" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Номер телефона</div>
            <div class="field-cell input">
              <input required type="text" class="form-input" v-model="phone" />
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
import { computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import AppMessage from '../AppMessage.vue';

export default {
  components: { AppMessage },
  setup() {
    const store = useStore();
    const objects = computed(() => store.getters['objects/objects']);

    const obj = ref({});
    const fio = ref('');
    const persAcc = ref('');
    const email = ref('');
    const phone = ref('');
    const quarters = ref([]);
    const quarterId = ref();

    watch(obj, (newObj, oldObj) => {
      quarters.value = newObj.quarters;
      console.log(quarters.value);
    });

    onMounted(() => {
      store.dispatch('objects/loadObjects');
    });

    const onSubmit = async () => {
      let data = {
        fio: fio.value,
        persAcc: persAcc.value,
        email: email.value,
        phone: phone.value,
      };
      await store.dispatch('accaunts/addAccaunts', {
        id: obj.value.id,
        quarterId: quarterId.value,
        accaunt: data,
      });
      console.log(quarterId);
    };

    return {
      objects,
      fio,
      persAcc,
      email,
      phone,
      obj,
      onSubmit,
      quarters,
      quarterId,
    };
  },
};
</script>
