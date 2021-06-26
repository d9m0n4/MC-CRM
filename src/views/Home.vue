<template>
  <div class="dashboard">
    <div class="dashboard-widgets main-dashboard">
      <div class="widget-panel">
        <div class="widget-panel-card">
          <div class="widget-panel-card-title">Последнее проведенное голосование</div>
          <div class="widget-panel-card-body">28.04.2021</div>
        </div>
        <div class="widget-panel-card">
          <div class="widget-panel-card-title">Лицевых счетов</div>
          <div class="widget-panel-card-body">{{ 1048 }}</div>
        </div>
        <div class="widget-panel-card">
          <div class="widget-panel-card-title">Договоров управления</div>
          <div class="widget-panel-card-body">39</div>
        </div>
      </div>
      <div class="widget-panel">
        <div class="widget-panel-chart">
          <chart />
        </div>
      </div>
      <div class="widget-panel">
        <div class="widget-panel-circlechart">
          <div class="widget-panel-circlechart-header">
            <div class="circlechart-title">Заявки</div>
            <div class="circlechart-filter">Сегодня</div>
          </div>
          <div class="widget-panel-circlechart-body">
            <div class="circlechart-categories">
              <div class="circlechart-categories-item">
                <div class="categories-item-icon green-icon"></div>
                <div class="categories-item-title">Выполнена</div>
              </div>
              <div class="circlechart-categories-item">
                <div class="categories-item-icon blue-icon"></div>
                <div class="categories-item-title">В работе</div>
              </div>
              <div class="circlechart-categories-item">
                <div class="categories-item-icon purple-icon"></div>
                <div class="categories-item-title">Новая</div>
              </div>
            </div>
            <div class="circlechart-diagram">
              <img src="../assets/img/chart-circle.png" alt="" />
            </div>
          </div>
        </div>
        <div class="widget-panel-circlechart">
          <div class="widget-panel-circlechart-header">
            <div class="circlechart-title">Обращения</div>
            <div class="circlechart-filter">Сегодня</div>
          </div>
          <div class="widget-panel-circlechart-body">
            <div class="circlechart-categories">
              <div class="circlechart-categories-item">
                <div class="categories-item-icon green-icon"></div>
                <div class="categories-item-title">Исполнено</div>
              </div>
              <div class="circlechart-categories-item">
                <div class="categories-item-icon purple-icon"></div>
                <div class="categories-item-title">Новое</div>
              </div>
            </div>
            <div class="circlechart-diagram">
              <img src="../assets/img/chart-circle.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-widgets">
      <div class="news-panel" :class="{ active: isActive }">
        <div class="news-widget">
          <div class="widget-card">
            <div class="widget-card-title">Новость</div>
            <div class="widget-card-body">
              <div class="news-title">Отключение отопления</div>
              <div class="news-text">04.05.2021г. прекращение отопительного сезона</div>
            </div>
            <div class="widget-card-footer">
              <div class="news-count">
                <img class="news-icon" src="../assets/img/icons/read.svg" alt="" />
                Отправлено <span>309</span>
              </div>
              <div class="news-count">
                <img class="news-icon" src="../assets/img/icons/checkmark-square.svg" alt="" />
                Прочитано <span>306</span>
              </div>
            </div>
          </div>
        </div>
        <div class="push-widget">
          <div class="push-widget-title">Уведомления</div>
          <div class="widget-card">
            <div class="widget-card-body">
              <div class="news-title">Уведомление о задолженности</div>
              <div class="news-text">
                ООО УК УправКомп уведомляет Вас о имеющейся задолженности по уплате коммунальных
                платежей за период: 01.04...
              </div>
            </div>
            <div class="widget-card-footer">
              <div class="news-count">
                <img class="news-icon" src="../assets/img/icons/read.svg" alt="" />
                Отправлено <span>309</span>
              </div>
              <div class="news-count">
                <img class="news-icon" src="../assets/img/icons/checkmark-square.svg" alt="" />
                Прочитано <span>306</span>
              </div>
            </div>
          </div>

          <div class="widget-card">
            <div class="widget-card-body">
              <div class="news-title">Уборка снега</div>
              <div class="news-text">
                ООО УК УправКомп уведомляет Вас о том, что 12.12.2020г. будет уборка снега во дворе,
                просьба освободить парковочные...
              </div>
            </div>
            <div class="widget-card-footer">
              <div class="news-count">
                <img class="news-icon" src="../assets/img/icons/read.svg" alt="" />
                Отправлено <span>309</span>
              </div>
              <div class="news-count">
                <img class="news-icon" src="../assets/img/icons/checkmark-square.svg" alt="" />
                Прочитано <span>306</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="show-btn" :class="{ active: isActive }" @click="show">
      <div v-if="!isActive" class="dots"><span></span></div>
      <div v-if="isActive" class="cross"><span></span></div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import chart from '../plugins/chart/chart.vue';
export default {
  components: { chart },
  data() {
    const store = useStore();
    const objects = computed(() => store.getters['objects/objects']);
    const isLoading = ref(false);

    onMounted(async () => {
      isLoading.value = true;
      await store.dispatch('objects/loadObjects');
      cons
      isLoading.value = false;
    });

    return {
      isActive: false,
      isMenuActive: false,
    };
  },
  methods: {
    show() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
