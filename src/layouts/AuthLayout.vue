<template>
  <app-message />
  <router-view></router-view>
</template>

<script>
import AppMessage from '../components/AppMessage.vue';

export default {
  components: { AppMessage },
};
</script>

<style lang="scss" scoped></style>
