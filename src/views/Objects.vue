<template>
  <app-loader v-if="isLoading" />
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
          <tr v-for="(object, id) in objects" :key="id" @dblclick="open(object.id)">
            <td>{{ id + 1 }}</td>
            <td>{{ object.adr }}</td>
            <td>{{ object.area }}</td>
            <td>{{ object.year }}</td>
          </tr>
        </tbody>
      </table>
      <object-item />
    </div>
    <div class="empty" v-else>Нет объектов</div>
  </div>
</template>

<script>
import AddObjectModal from '../components/AddObjectModal';
import AppLoader from '../components/AppLoader.vue';
import AppContentActions from '../components/AppContentActions';
import { useStore } from 'vuex';
import { computed, onMounted, onUpdated } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ObjectItem from './ObjectItem.vue';

export default {
  components: {
    AddObjectModal,
    AppContentActions,
    AppLoader,
    ObjectItem,
  },
  methods: {},
  setup() {
    const isLoading = ref(true);
    const store = useStore();
    const router = useRouter();
    const isOpen = computed(() => store.getters['modal']);

    const objects = computed(() => store.getters['objects/objects']);

    onMounted(async () => {
      isLoading.value = true;
      await store.dispatch('objects/loadObjects');
      isLoading.value = false;
    });

    onUpdated(() => {
      store.dispatch('objects/loadObjects');
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

    const open = async (id) => {
      await router.push({ name: 'object', params: { id } });
    };
    return {
      addObjectsMoadl,
      addFlatMoadl,
      search,
      isOpen,
      objects,
      isLoading,
      open,
    };
  },
};
</script>
