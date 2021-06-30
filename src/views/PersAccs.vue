<template>
  <div class="personal-accaunts">
    <add-pers-accs-modal v-if="isModalOpen" @close="isModalOpen = !isModalOpen" />
    <AppContentActions :btns="[{ name: 'Добавить лицевой счет', event: openModal }]" />
    <div class="houses-list-table">
      <table class="table">
        <thead>
          <tr>
            <th>№ п/п</th>
            <th class="ta-l">Наименование</th>
            <th class="ta-l">Здание</th>
            <th class="ta-l">Помещение</th>
            <th class="ta-c">Собственник</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(object, index) in objects" :key="index">
            <td class="ta-c">{{ index + 1 }}</td>
            <td>15683</td>
            <td>г Яранск, ул Строительная, д. 9</td>
            <td>кв. 1</td>
            <td class="ta-c">Иванов Иван Иванович</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import AppContentActions from '../components/AppContentActions';
import AddPersAccsModal from '../components/PersAccs/AddPersAccsModal';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const isModalOpen = ref(false);
    const openModal = () => {
      isModalOpen.value = true;
    };

    const objects = computed(() => store.getters['objects/objects']);

    onMounted(() => {
      console.log(objects);
      store.dispatch('objects/loadObjects');
    });

    return {
      openModal,
      isModalOpen,
      objects,
    };
  },
  components: {
    AppContentActions,
    AddPersAccsModal,
  },
};
</script>
