<template>
  <div class="app-content-actions">
    <div class="add-buttons">
      <button
        class="btn btn-accent btn-large"
        v-for="(item, id) in items"
        :key="id"
        @click="$emit('userEvent')"
      >
        {{ item }}
      </button>
    </div>
    <div class="search-button">
      <input type="text" name="search" placeholder="Поиск" class="search" />
      <button class="btn btn-accent btn-large">Поиск</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['btns'],
  data() {
    return {
      items: this.btns,
    };
  },
};
</script>
