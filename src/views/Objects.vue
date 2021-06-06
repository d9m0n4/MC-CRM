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
        <app-loader v-if="isLoading" />
        <tbody v-else>
          <tr v-for="(object, id) in objects" :key="id">
            <td>{{ id + 1 }}</td>
            <td>{{ object.adr }}</td>
            <td>{{ object.area }}</td>
            <td>{{ object.year }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AddObjectModal from '../components/AddObjectModal';
import AppLoader from '../components/AppLoader.vue';
import AppContentActions from '../components/AppContentActions';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { ref } from 'vue';
export default {
  components: {
    AddObjectModal,
    AppContentActions,
    AppLoader,
  },
  methods: {},
  setup() {
    const isLoading = ref(true);
    const store = useStore();
    const isOpen = computed(() => store.getters['modal']);

    const objects = computed(() => store.getters['objects/objects']);

    onMounted(async () => {
      isLoading.value = true;
      await store.dispatch('objects/loadObjects');
      isLoading.value = false;
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
      isLoading,
    };
  },
};
</script>
