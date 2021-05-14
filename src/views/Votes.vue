<template>
  <div class="votes-list">
    <appContentActions :btns="['Создать голосование']" />
    <div class="votes-list-table">
      <table class="table">
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Начало</th>
            <th>Окончание</th>
            <th>Адрес</th>
            <th>Форма проведения</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>31.03.2021 18:00</td>
            <td>31.03.2021 19:00</td>
            <td>г. Яранск, Лагуновская, 67А</td>
            <td>Заочное голосование</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import appContentActions from '../components/appContentActions';
export default {
  components: {
    appContentActions,
  },
};
</script>
