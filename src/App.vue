<template>
  <component :is="layout + '-layout'"></component>
</template>

<script>
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout);
    return {
      layout,
    };
  },
  components: {
    MainLayout,
    AuthLayout,
  },
};
</script>

<style lang="scss"></style>
