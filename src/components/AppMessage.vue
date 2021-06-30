<template>
  <div class="app-message" :class="message.type" v-if="message">
    <div class="app-message__header">
      <div class="app-message__header-title">Ошибка</div>
      <div class="app-message__header-closebtn" @click="close">
        <img src="../assets/img/icons/close.svg" alt="closebtn" />
      </div>
    </div>
    <div class="app-message__body">
      {{ message.value }}
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const message = computed(() => store.getters['message']);
    const close = () => {
      store.commit('clearMessage');
    };
    return {
      message,
      close,
    };
  },
};
</script>

<style lang="scss" scoped></style>
