<template>
  <app-loader v-if="isLoading" />
  <div class="object__item">
    <div class="object__item-header">
      <div class="object__item-header__group">
        <div class="title">Объект управления</div>
        <div class="edit-btn"><img src="../assets/img/icons/edit-icon.svg" alt="" /></div>
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
            <div class="object__info-row__text">{{ 2 }}</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Город/ н.п.</div>
            <div class="object__info-row__text">{{ 2 }}</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Улица</div>
            <div class="object__info-row__text">{{ 2 }}</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Год постройки</div>
            <div class="object__info-row__text">{{ object.year }}</div>
          </div>
        </div>
        <div class="object__info">
          <div class="object__info-row">
            <div class="object__info-row__title">Дом</div>
            <div class="object__info-row__text">{{ object.address }}</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Индекс</div>
            <div class="object__info-row__text">612260</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Площадь</div>
            <div class="object__info-row__text">{{ object.area }}</div>
          </div>
        </div>
      </div>
      <div class="object__item-body__table">
        <label for="table">Помещения</label>
        <div class="object__item-table">
          <table id="table" class="item__table">
            <thead>
              <tr>
                <th>№ Помещения</th>
                <th>Собственник</th>
                <th>Площадь</th>
                <th>Лицевой счет</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>кв. 1</td>
                <td>Иванов Иван Иванович</td>
                <td>32,90</td>
                <td>56942</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';
import AppLoader from '../components/AppLoader.vue';
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const object = ref({});

    const isLoading = ref(true);

    onMounted(async () => {
      isLoading.value = true;
      object.value = await store.dispatch('objects/loadOneObject', route.params.id);
      console.log(object.value);
      isLoading.value = false;
    });

    return {
      object,
      isLoading,
    };
  },
  components: {
    AppLoader,
  },
};
</script>

<style lang="scss" scoped></style>
