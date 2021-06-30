<template>
  <div class="app-content-actions">
    <div class="add-buttons">
      <button
        class="btn btn-accent btn-large"
        v-for="(item, id) of items"
        :key="id"
        @click="item.event"
      >
        {{ item.name }}
      </button>
    </div>
    <div class="search-button">
      <input type="text" name="search" placeholder="Поиск" class="search" />
      <button class="btn btn-accent btn-large" @click="$emit('search')">Поиск</button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props: {
    btns: {
      type: Object,
      default: [
        {
          name: 'add',
          event: () => console.log('1'),
        },
      ],
    },
  },
  emits: ['search'],
  setup(props) {
    const items = ref(props.btns);

    return {
      items,
    };
  },
};
</script>
