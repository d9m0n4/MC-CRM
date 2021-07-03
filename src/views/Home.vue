<template>
  <app-loader v-if="isLoading" />
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
        <div class="widget-panel-chart" ref="widget">
          <div class="chart-panel">
            <apexchart
              type="area"
              height="250"
              :options="lineData.chartOptions"
              :series="lineData.series"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="widget-panel">
        <div class="widget-panel-circlechart">
          <div class="widget-panel-circlechart-header">
            <div class="circlechart-title">Заявки</div>
            <div class="circlechart-filter">Сегодня</div>
          </div>
          <apexchart
            type="donut"
            height="250"
            :options="data.chartOptions"
            :series="data.series"
          ></apexchart>
        </div>
        <div class="widget-panel-circlechart">
          <div class="widget-panel-circlechart-header">
            <div class="circlechart-title">Обращения</div>
            <div class="circlechart-filter">Сегодня</div>
          </div>
          <div class="chart-container" id="chart">
            <apexchart
              type="donut"
              height="250"
              :options="data.chartOptions"
              :series="data.series"
            ></apexchart>
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
    <div class="show-btn" :class="{ active: isActive }" @click="isActive != isActive">
      <div v-if="!isActive" class="dots"><span></span></div>
      <div v-if="isActive" class="cross"><span></span></div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import AppLoader from '../components/AppLoader.vue';
import VueApexCharts from 'vue3-apexcharts';

export default {
  components: { AppLoader, apexchart: VueApexCharts },
  setup() {
    const store = useStore();
    const objects = computed(() => store.getters['objects/objects']);
    const isLoading = ref(true);

    onMounted(async () => {
      isLoading.value = true;
      await store.dispatch('objects/loadObjects');
      isLoading.value = false;
    });

    const data = {
      series: [44, 55, 41, 17],
      chartOptions: {
        chart: {
          height: 270,
          type: 'donut',
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'top',
              },
            },
          },
        ],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: 'left',
        },
      },
    };
    const lineData = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],

      chartOptions: {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
          },
        },
        colors: ['#2EA942', '#A92E2E'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy',
          },
        },
        legend: {
          position: 'right',
        },
      },
    };

    return {
      isActive: false,
      isMenuActive: false,
      isLoading,
      data,
      lineData,
    };
  },
};
</script>
