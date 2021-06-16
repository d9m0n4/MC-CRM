<template>
  <div class="personal-accaunts">
    <AppContentActions :btns="[{ name: 'Добавить лицевой счет' }]" />
    <div class="houses-list-table">
      <table class="table">
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Наименование</th>
            <th>Здание</th>
            <th>Помещение</th>
            <th>Собственник</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>15683</td>
            <td>г Яранск, ул Строительная, д. 9</td>
            <td>кв. 1</td>
            <td>Иванов Иван Иванович</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import AppContentActions from '../components/AppContentActions';
export default {
  components: {
    AppContentActions,
  },
};
</script>
