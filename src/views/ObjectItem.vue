<template>
  <app-loader v-if="isLoading" />
  <div class="object__item">
    <div class="object__item-header">
      <div class="object__item-header__group">
        <div class="title">Объект управления</div>
        <div class="edit-btn" @click="editForm" v-if="!onEditing">
          <img src="../assets/img/icons/edit-icon.svg" alt="" />
        </div>
      </div>
      <div class="object__item-header__closebtn">
        <img src="../assets/img/icons/close.svg" alt="" />
      </div>
    </div>
    <div class="object__item-body">
      <div class="object__item-body__top-info">
        <div class="object__info">
          <div class="object__info-row">
            <div class="object__info-row__title">Регион/ район</div>
            <div class="object__info-row__text">{{ address.region }}</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Город/ н.п.</div>
            <div class="object__info-row__text">{{ address.city }}</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Улица</div>
            <div class="object__info-row__text">{{ address.street }}</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Год постройки</div>
            <div class="object__info-row__text">{{ object.year }} год</div>
          </div>
        </div>
        <div class="object__info">
          <div class="object__info-row">
            <div class="object__info-row__title">Дом</div>
            <div class="object__info-row__text">{{ address.house }}</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Индекс</div>
            <div class="object__info-row__text">{{ address.postalCode }}</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Площадь</div>
            <div class="object__info-row__text">{{ object.area }} м.кв</div>
          </div>
        </div>
      </div>
      <div class="object__item-body__table">
        <caption for="table">
          Помещения
        </caption>
        <div class="object__item-table">
          <table id="table" class="item__table">
            <thead>
              <tr>
                <th>№ п/п</th>
                <th>№ Помещения</th>
                <th>Собственник</th>
                <th @click="sortByArea">Площадь</th>
                <th>Лицевой счет</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(flat, index) in quarters" :key="index">
                <td>{{ `${index + 1} ` < 10 ? `0${index + 1}` : `${index + 1}` }}</td>
                <td :contenteditable="onEditing">
                  {{ flat.flatNum }}
                </td>
                <td :contenteditable="onEditing">Иванов Иван Иванович</td>
                <td :contenteditable="onEditing">{{ flat.flatArea }} м.кв</td>
                <td :contenteditable="onEditing"></td>
              </tr>

              <tr class="empty-row" v-if="onEditing">
                <td class="empty-cell" colspan="5">
                  <img class="add-icon" src="../assets/img/icons/add-icon.svg" @click="addItem" />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            class="btn btn-accent btn-large"
            v-if="onEditing && persAccs.length !== 0"
            @click="onSave"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';
import AppLoader from '../components/AppLoader.vue';
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const object = ref({});
    const address = ref({});
    const quarters = ref('');
    const onEditing = ref(false);

    const persAccs = ref([]);

    const isLoading = ref(true);

    onMounted(async () => {
      isLoading.value = true;
      object.value = await store.dispatch('objects/loadOneObject', route.params.id);
      address.value = object.value.address;
      quarters.value = object.value.quarters;
      quarters.value.sort((a, b) => a.flatNum - b.flatNum);
      isLoading.value = false;
    });

    const sortByArea = () => {
      quarters.value.sort((a, b) => a.flatArea - b.flatArea);
    };

    const editForm = () => {
      onEditing.value = true;
    };

    const addItem = () => {
      console.log(persAccs.value);
    };

    const onSave = () => {
      onEditing.value = false;
    };

    return {
      object,
      address,
      isLoading,
      persAccs,
      onEditing,
      editForm,
      addItem,
      onSave,
      quarters,
      sortByArea,
    };
  },
  components: {
    AppLoader,
  },
};
</script>

<style lang="scss" scoped></style>
