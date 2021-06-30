<template>
  <div class="sidebar" :class="{opened: isOpen}">
    <div class="app-logo">
      <img class="icon" src="../assets/img/icons/logo.svg" alt="logo" />CRM
    </div>
    <div class="app-nav">
      <nav class="navigation">
        <ul class="navigation-list">
          <li class="navigation-list_item">
            <router-link to="/">
              <img
                class="icon"
                src="../assets/img/icons/dashboard-icon.svg"
                alt=""
              />Главная</router-link
            >
          </li>

          <li class="navigation-list_item">
            <router-link to="/objects"
              ><img
                class="icon"
                src="../assets/img/icons/building-icon.svg"
                alt=""
              />Объекты</router-link
            >
          </li>

          <li class="navigation-list_item">
            <router-link to="/accaunt/list"
              ><img class="icon" src="../assets/img/icons/card-icon.svg" alt="" /> Лицевые
              счета</router-link
            >
          </li>
          <li class="navigation-list_item">
            <router-link to="/documents"
              ><img class="icon" src="../assets/img/icons/document-icon.svg" alt="" />
              Документы</router-link
            >
          </li>
          <li class="navigation-list_item">
            <router-link to="/requests"
              ><img class="icon" src="../assets/img/icons/clipboard-icon.svg" alt="" />
              Заявки</router-link
            >
          </li>
          <li class="navigation-list_item">
            <router-link to="/votes"
              ><img class="icon" src="../assets/img/icons/votes-icon.svg" alt="" />
              Голосования</router-link
            >
          </li>
          <li class="navigation-list_item">
            <router-link to="/appeal"
              ><img class="icon" src="../assets/img/icons/appeals-icon.svg" alt="" />
              Обращения</router-link
            >
          </li>
          <li class="navigation-list_item">
            <router-link to="/service"
              ><img class="icon" src="../assets/img/icons/service-icon.svg" alt="" />
              Сервис</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
 setup() {
  const store = useStore()
   return {
    isOpen: computed(() => store.getters['sidebar'])
   }
 }
};
</script>
