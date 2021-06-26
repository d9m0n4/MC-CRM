<template>
  <app-loader v-if="isLoading" />
  <add-object-modal v-if="isOMOpen" @close="isOMOpen = !isOMOpen" />
  <add-flatmodal v-if="isFMOpen" @close="isFMOpen = !isFMOpen" />
  <div class="houses-list">
    <AppContentActions
      :btns="[
        { name: 'Добавить дом', event: addObjectsMoadl },
        { name: 'Добавить помещение', event: addFlatModal },
      ]"
      @search="search"
    />
    <div class="houses-list-table" v-if="objects.length !== 0">
      <table class="table">
        <thead>
          <tr>
            <th>№ п/п</th>
            <th class="ta-l">Адрес</th>
            <th class="ta-l">Площадь</th>
            <th>Год постройки</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(object, id) in objects" :key="id" @dblclick="open(object.id)">
            <td class="ta-c">{{ id + 1 }}</td>
            <td>{{ object.fullAddress }}</td>
            <td class="ta-l">{{ object.area }} м.кв</td>
            <td class="ta-c">{{ object.year }} год</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="empty-objects" v-else>
      <img src="../assets/img/icons/empty-objects.svg" alt="" />Нет объектов
    </div>
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
import AddFlatmodal from '../components/Objects/AddFlatModal';

export default {
  components: {
    AddObjectModal,
    AppContentActions,
    AppLoader,
    ObjectItem,
    AddFlatmodal,
  },
  setup() {
    const isLoading = ref(true);
    const store = useStore();
    const router = useRouter();

    const isOMOpen = ref(false);
    const isFMOpen = ref(false);

    const objects = computed(() => store.getters['objects/objects']);

    onMounted(async () => {
      isLoading.value = true;
      await store.dispatch('objects/loadObjects');
      isLoading.value = false;
      console.log(objects.value);
    });

    onUpdated(() => {
      store.dispatch('objects/loadObjects');
    });

    const addObjectsMoadl = () => {
      isOMOpen.value = true;
    };

    const addFlatModal = () => {
      isFMOpen.value = true;
    };
    const search = () => {
      console.log('search');
    };

    const open = async (id) => {
      await router.push({ name: 'object', params: { id } });
    };
    return {
      addObjectsMoadl,
      addFlatModal,
      search,
      isOMOpen,
      isFMOpen,
      objects,
      isLoading,
      open,
    };
  },
};
</script>
