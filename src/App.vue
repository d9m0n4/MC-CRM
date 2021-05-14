<template>
  <app-loader v-if="isLoading"></app-loader>
  <Login v-if="!isAuth" @login="logincrm"></Login>
  <template v-if="isAuth">
    <sidebar :visible="true"></sidebar>
    <div class="app-content">
      <div class="app-content-header">
        <div class="app-content-header-title">
          <div class="menu-icon" @click="showMenu">
            <i class="menu-icon-line" :class="{ active: isMenuActive }"></i>
          </div>
          Главная
        </div>
        <div class="app-content-header-menu">
          <div class="app-content-header-profile">
            <div class="profile-avatar"><img src="./assets/img/avatar.svg" alt="" /></div>
            <div class="user-info">
              <div class="user-name">Чесноков Дмитрий</div>
              <div class="user-role">Администратор</div>
            </div>
          </div>
          <ul class="app-content-header-menu-links">
            <li class="header-menu-item">
              <a class="header-menu-link" href="#"
                ><img class="header-icon" src="./assets/img/icons/email-icon.svg" alt=""
              /></a>
            </li>
            <li class="header-menu-item">
              <a class="header-menu-link" href="#"
                ><img class="header-icon" src="./assets/img/icons/notifications-icon.svg" alt=""
              /></a>
            </li>
            <li class="header-menu-item">
              <a class="header-menu-link" href="#"
                ><img class="header-icon" src="./assets/img/icons/log-out-icon.svg" alt=""
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="app-content-body">
        <router-view></router-view>
      </div>
    </div>
  </template>
</template>

<script>
import appLoader from './components/AppLoader';
import sidebar from './components/app-sidebar';
import mainworkspace from './components/main-workspace';

import Login from './views/Login';

export default {
  data() {
    return {
      isLoading: false,
      isMenuActive: false,
      isAuth: false,
    };
  },
  components: {
    sidebar,
    mainworkspace,
    appLoader,
    Login,
  },
  methods: {
    showMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    logincrm() {
      this.isAuth = true;
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss"></style>
