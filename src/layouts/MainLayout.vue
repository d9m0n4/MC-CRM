<template>
  <app-loader v-if="isLoading" />
  <app-sidebar></app-sidebar>
  <div class="app-content">
    <app-header></app-header>
    <div class="app-content-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppLoader from '../components/AppLoader';
import AppSidebar from '../components/AppSidebar';
import AppHeader from '../components/AppHeader.vue';
import { ref } from '@vue/reactivity';

export default {
  components: { AppLoader, AppHeader, AppSidebar },
  setup() {
    const isLoading = ref(false);
    return {
      isLoading,
    };
  },
};
</script>
