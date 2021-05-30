<template>
  <div class="service-group">
    <div class="service-group-item">
      <div class="uploading-item">
        <div class="uploading-item-row">
          <div class="uploading-item-row-title">Реестры задолженностей</div>
          <div class="uploading-item-row-button">
            <button class="btn btn-accent btn-large">Выгрузить</button
            ><button class="btn btn-accent btn-large">Загрузить</button>
          </div>
        </div>
        <div class="uploading-item-row">
          <div class="uploading-item-row-title">Показания приборов учета</div>
          <div class="uploading-item-row-button">
            <button class="btn btn-accent btn-large">Выгрузить</button>
          </div>
        </div>
        <div class="uploading-item-row">
          <div class="uploading-item-row-title">Журнал заявок</div>
          <div class="uploading-item-row-button">
            <button class="btn btn-accent btn-large">Выгрузить</button>
          </div>
        </div>
      </div>
    </div>
    <div class="service-group-item">
      <div class="staff">
        <div class="staff-header">
          <div class="staff-header-title">
            Сотрудники
          </div>
        </div>
        <div class="staff-body">
          <table class="staff-list">
            <tbody>
              <tr>
                <td>1.</td>
                <td>Чесноков Дмитрий</td>
                <td>Администратор</td>
                <td>+79991234565</td>
                <td>
                  <div class="edit-btn"><img src="../assets/img/icons/edit-icon.svg" alt="" /></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="staff-footer">
          <button class="btn btn-accent btn-large">Добавить</button>
        </div>
      </div>
    </div>
    <div class="service-group-item">
      <div class="company-info">
        <div class="company-info-header">
          <div class="company-info-header-title">ООО УК УправКомп</div>
          <div class="company-info-header-edit edit-btn">
            <img src="../assets/img/icons/edit-icon.svg" alt="" />
          </div>
        </div>
        <div class="company-info-body">
          <div class="company-info-body-row">
            <div class="row-cell">ОГРН</div>
            <div class="row-cell">1084339000613</div>
          </div>
          <div class="company-info-body-row">
            <div class="row-cell">Дата гос. регистрации</div>
            <div class="row-cell">03.12.2008</div>
          </div>
          <div class="company-info-body-row">
            <div class="row-cell">ИНН</div>
            <div class="row-cell">4339008987</div>
          </div>
          <div class="company-info-body-row">
            <div class="row-cell">КПП</div>
            <div class="row-cell">433901001</div>
          </div>
          <div class="company-info-body-row">
            <div class="row-cell">Адрес места нахождения</div>
            <div class="row-cell">
              612260, Кировская обл, Яранский р-н, г Яранск, ул Кирова, д. 36
            </div>
          </div>
          <div class="company-info-body-row">
            <div class="row-cell">Телефон</div>
            <div class="row-cell">+7 (833) 672-17-72</div>
          </div>
          <div class="company-info-body-row">
            <div class="row-cell">Адрес электронной почты</div>
            <div class="row-cell">ukupravcomp@yandex.ru</div>
          </div>
        </div>
      </div>
    </div>
    <div class="service-group-item">
      <div class="schedule">
        <div class="schedule-header">
          <div class="schedule-hedaer-title">График работы</div>
          <div class="schedule-hedaer-edit edit-btn">
            <img src="../assets/img/icons/edit-icon.svg" alt="" />
          </div>
        </div>
        <div class="schedule-body">
          <table class="work-hours">
            <thead>
              <tr>
                <th>Дни недели</th>
                <th>Время работы</th>
                <th>Перерыв</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="day">Понедельник</td>
                <td>08:00 - 17:00</td>
                <td>12:00 - 13:00</td>
              </tr>
              <tr>
                <td class="day">Вторник</td>
                <td>08:00 - 17:00</td>
                <td>12:00 - 13:00</td>
              </tr>
              <tr>
                <td class="day">Среда</td>
                <td>08:00 - 17:00</td>
                <td>12:00 - 13:00</td>
              </tr>
              <tr>
                <td class="day">Четверг</td>
                <td>08:00 - 17:00</td>
                <td>12:00 - 13:00</td>
              </tr>
              <tr>
                <td class="day">Пятница</td>
                <td>08:00 - 17:00</td>
                <td>12:00 - 13:00</td>
              </tr>
              <tr>
                <td class="day">Суббота</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td class="day">Воскресенье</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
