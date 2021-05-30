<template>
  <div class="container">
    <div class="card">
      <div class="tg-chart" id="chart">
        <div data-el="tooltip" class="tg-chart-tooltip"></div>
        <canvas data-el="main"></canvas>

        <div class="tg-chart-slider" data-el="slider">
          <canvas></canvas>
          <div data-el="left" class="tg-chart-slider__left">
            <div class="tg-chart-slider__arrow--left" data-el="arrow" data-type="left"></div>
          </div>

          <div data-el="window" data-type="window" class="tg-chart-slider__window"></div>

          <div data-el="right" class="tg-chart-slider__right">
            <div class="tg-chart-slider__arrow--right" data-el="arrow" data-type="right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { chart } from './chart';
import data from './data.json';
import './styles.scss';

export default {
  setup() {
    onMounted(() => {
      const tgChart = chart(document.getElementById('chart'), data[3]);
      tgChart.init();
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
