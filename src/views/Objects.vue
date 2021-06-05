<template>
  <add-object-modal v-if="isOpen" />
  <div class="houses-list">
    <AppContentActions
      :btns="[
        { name: 'Добавить дом', event: addObjectsMoadl },
        { name: 'Добавить помещение', event: addFlatMoadl },
      ]"
      @search="search"
    />
    <div class="houses-list-table" v-if="objects.length !== 0">
      <table class="table">
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Адрес</th>
            <th>Площадь</th>
            <th>Год постройки</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(object, id) in objects" :key="id">
            <td>{{ id + 1 }}</td>
            <td>{{ object.adr }}</td>
            <td>{{ object.area }}</td>
            <td>{{ object.year }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="empty" v-else>Нет объектов</div>
  </div>
</template>

<script>
import AddObjectModal from '../components/AddObjectModal';
import AppContentActions from '../components/AppContentActions';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
export default {
  components: {
    AddObjectModal,
    AppContentActions,
  },
  methods: {},
  setup() {
    const store = useStore();
    const isOpen = computed(() => store.getters['modal']);

    const objects = computed(() => store.getters['objects/objects']);

    onMounted(async () => {
      await store.dispatch('objects/loadObjects');
    });

    const addObjectsMoadl = () => {
      store.commit('openModal');
    };
    const addFlatMoadl = () => {
      console.log('2');
    };
    const search = () => {
      console.log('search');
    };
    return {
      addObjectsMoadl,
      addFlatMoadl,
      search,
      isOpen,
      objects,
    };
  },
};
</script>
