<template>
  <div class="sidebar" v-if="visible">
    <div class="app-logo">
      <img class="icon" src="../assets/img/icons/logo.svg" alt="logo" />CRM
    </div>
    <div class="app-nav">
      <nav class="navigation">
        <ul class="navigation-list">
          <router-link to="/">
            <li class="navigation-list_item">
              <img class="icon" src="../assets/img/icons/dashboard-icon.svg" alt="" />Главная
            </li>
          </router-link>
          <router-link to="/objects"
            ><li class="navigation-list_item">
              <img class="icon" src="../assets/img/icons/building-icon.svg" alt="" />Объекты
            </li></router-link
          >
          <router-link to="/accaunt/list"
            ><li class="navigation-list_item">
              <img class="icon" src="../assets/img/icons/card-icon.svg" alt="" />
              Лицевые счета
            </li></router-link
          >
          <router-link to="/documents"
            ><li class="navigation-list_item">
              <img class="icon" src="../assets/img/icons/document-icon.svg" alt="" />
              Документы
            </li></router-link
          >
          <router-link to="/requests"
            ><li class="navigation-list_item">
              <img class="icon" src="../assets/img/icons/clipboard-icon.svg" alt="" />
              Заявки
            </li></router-link
          >
          <router-link to="/votes"
            ><li class="navigation-list_item">
              <img class="icon" src="../assets/img/icons/votes-icon.svg" alt="" />
              Голосования
            </li></router-link
          >
          <router-link to="/appeal"
            ><li class="navigation-list_item">
              <img class="icon" src="../assets/img/icons/appeals-icon.svg" alt="" />
              Обращения
            </li></router-link
          >
          <router-link to="/service"
            ><li class="navigation-list_item">
              <img class="icon" src="../assets/img/icons/service-icon.svg" alt="" />
              Сервис
            </li></router-link
          >
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: false,
  },
};
</script>
