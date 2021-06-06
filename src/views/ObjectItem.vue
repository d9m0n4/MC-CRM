<template>
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
            <div class="object__info-row__text">обл Кировская, р-н Яранский</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Город/ н.п.</div>
            <div class="object__info-row__text">г. Яранск</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Улица</div>
            <div class="object__info-row__text">Строительная</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Год постройки</div>
            <div class="object__info-row__text">1985 г.</div>
          </div>
        </div>
        <div class="object__info">
          <div class="object__info-row">
            <div class="object__info-row__title">Дом</div>
            <div class="object__info-row__text">9</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Индекс</div>
            <div class="object__info-row__text">612260</div>
          </div>
          <div class="object__info-row">
            <div class="object__info-row__title">Площадь</div>
            <div class="object__info-row__text">4350,73 м.кв</div>
          </div>
        </div>
      </div>
      <div class="object__item-body__table">
        <label for="table">Помещения</label>
        <table id="table" class="object__table">
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
