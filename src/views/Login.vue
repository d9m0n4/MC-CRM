<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <div class="login-form-title">Войти в аккаунт</div>
    <div class="input-box">
      <div class="input">
        <input type="email" name="email" id="email" v-model="lValue" @blur="lBlur" />
        <small>{{ lError }}</small>
        <label for="email">Логин</label>
        <span class="spin" :class="{ invalid: lError }"></span>
      </div>

      <div class="input">
        <input type="password" name="password" id="password" v-model="pValue" @blur="pBlur" />
        <small>{{ pError }}</small>
        <label for="password">Пароль</label>
        <span class="spin"></span>
      </div>

      <div class="login-button">
        <button class="btn btn-large btn-login btn-accent" :disabled="isSubmitting">
          ВОЙТИ В АККАУНТ
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import { useLoginForm } from '../use/loginForm';

export default {
  setup() {
    return { ...useLoginForm() };
  },
};
</script>
