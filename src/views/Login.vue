<template>
  <div class="login-form">
    <div class="login-form-title">Войти в аккаунт</div>
    <div class="input-box">
      <div class="input">
        <input type="text" name="name" id="name" required />
        <label for="name">Логин</label>
        <span class="spin"></span>
      </div>

      <div class="input">
        <input type="password" name="pass" id="pass" required />
        <label for="pass">Пароль</label>
        <span class="spin"></span>
      </div>

      <div class="login-button">
        <button class="btn btn-large btn-login btn-accent" @click="$emit('login')">
          ВОЙТИ В АККАУНТ
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
