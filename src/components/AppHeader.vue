<template>
  <div class="app-content-header">
    <div class="app-content-header-title" :class="{active: isOpen}">
      <div class="menu-icon" @click="toggleMenu" >
        <i class="menu-icon-line" :class="{ active: isOpen }"></i>
      </div>
      {{ $route.name }}
    </div>
    <div class="app-content-header-menu">
      <div class="app-content-header-profile">
        <div class="profile-avatar"><img src="../assets/img/avatar.svg" alt="" /></div>
        <div class="user-info">
          <div class="user-name">Чесноков Дмитрий</div>
          <div class="user-role">Администратор</div>
        </div>
      </div>
      <ul class="app-content-header-menu-links">
        <li class="header-menu-item">
          <a class="header-menu-link" href="#"
            ><img class="header-icon" src="../assets/img/icons/email-icon.svg" alt=""
          /></a>
        </li>
        <li class="header-menu-item">
          <a class="header-menu-link" href="#"
            ><img class="header-icon" src="../assets/img/icons/notifications-icon.svg" alt=""
          /></a>
        </li>
        <li class="header-menu-item">
          <a class="header-menu-link" @click.prevent="logout"
            ><img class="header-icon" src="../assets/img/icons/log-out-icon.svg" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { provide } from '@vue/runtime-core';
export default {
  setup() {
    const isOpen = ref(false);
    const store = useStore();
    const router = useRouter();
    const logout = () => {
      store.commit('auth/logout');
      router.push('/auth');
    };
    const toggleMenu = () => {
      const val = isOpen.value = !isOpen.value
      store.commit('toggleSidebar', val)
    }
    provide('val', isOpen)
    return {
      logout,
      toggleMenu,
      isOpen
    };
  },
};
</script>

<style lang="scss" scoped></style>
