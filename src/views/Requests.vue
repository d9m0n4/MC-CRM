<template>
  <div class="requests-list">
    <appContentActions :btns="['Создать заявку']" />
    <div class="requests-list-table">
      <table class="table">
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Дата</th>
            <th>Адрес</th>
            <th>Описание</th>
            <th>Срок</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>31.03.2021</td>
            <td>г. Яранск, Лагуновская, 67А, кв. 74</td>
            <td>У 3 подъезда от гор...</td>
            <td>03.04.2021</td>
            <td>Выполнена</td>
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
