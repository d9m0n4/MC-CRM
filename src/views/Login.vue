<template>
  <div class="auth-page">
    <div class="auth-content">
      <p>Управляйте жилым фондом в одном приложении</p>
      <p>MC-CRM</p>
      <p>CRM система для управляющих компаний</p>
    </div>
    <div class="auth-form">
      <form class="login-form" @submit.prevent="onSubmit">
        <div class="login-form-title">Войти в аккаунт</div>
        <div class="input-box">
          <div class="input-group">
            <div class="input-field">
              <input
                required
                class="input login"
                :class="{ invalid: lError, valid: lValue && !lError }"
                type="name"
                name="email"
                id="email"
                v-model="lValue"
                @blur="lBlur"
              />
              <label class="label" for="email">Логин</label>
              <small>{{ lError }}</small>
            </div>
            <div class="input-field">
              <input
                required
                class="input password"
                :class="{ invalid: pError, valid: pValue && !pError }"
                type="password"
                name="password"
                id="password"
                v-model="pValue"
                @blur="pBlur"
              />

              <label class="label" for="password">Пароль</label>
              <small>{{ pError }}</small>
            </div>
          </div>
          <div class="login-button">
            <button class="btn btn-large btn-login btn-accent" :disabled="isSubmitting">
              ВОЙТИ В АККАУНТ
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { useLoginForm } from '../use/loginForm';

export default {
  setup() {
    return { ...useLoginForm() };
  },
};
</script>
