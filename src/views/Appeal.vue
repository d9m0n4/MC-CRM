<template>
  <div class="votes-list">
    <AppContentActions />
    <div class="votes-list-table">
      <table class="table">
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Дата получения</th>
            <th>Адрес</th>
            <th>Заявитель</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>31.03.2021</td>
            <td>г. Яранск, Лагуновская, 67А</td>
            <td>Иванов Иван Иванович</td>
            <td>Исполнено</td>
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
