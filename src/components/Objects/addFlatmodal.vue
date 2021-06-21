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
import useAddFlat from '../../use/objects/addFlat';
export default {
  setup() {
    return {
      ...useAddFlat(),
    };
  },
  components: {
    AppMessage,
  },
};
</script>
