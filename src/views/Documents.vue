<template>
  <div class="document-list">
    <appContentActions :btns="['Добавить договор']" />
    <div class="dashboard">
      <div class="documents-tabs">
        <div class="tabs">
          <a v-on:click="activetab = 1" v-bind:class="[activetab === 1 ? 'active' : '']"
            >Договоры управления</a
          >
          <a v-on:click="activetab = 2" v-bind:class="[activetab === 2 ? 'active' : '']"
            >Протоколы ОСС</a
          >
        </div>
        <div class="tab-content">
          <div v-if="activetab === 1" class="tab-content-item">
            <div class="contracts-cards">
              <div class="contract-card">
                <div class="contract-card-header">
                  <div class="contract-title">Договор управления № 1</div>
                  <div class="contract-status">действующий</div>
                </div>
                <div class="contract-card-body">
                  <div class="contract-card-body-row">
                    <div class="row-cell">Дата заключения</div>
                    <div class="row-cell info">20.12.2020</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Срок действия</div>
                    <div class="row-cell info">1 год</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Стороны договора</div>
                    <div class="row-cell info">ООО Аврора Собственники объекта жилищного фонда</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Основание заключения</div>
                    <div class="row-cell info">Решение собрания собственников</div>
                  </div>
                </div>
                <div class="contract-card-footer">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </div>
              </div>
              <div class="contract-card">
                <div class="contract-card-header">
                  <div class="contract-title">Договор управления № 1</div>
                  <div class="contract-status">действующий</div>
                </div>
                <div class="contract-card-body">
                  <div class="contract-card-body-row">
                    <div class="row-cell">Дата заключения</div>
                    <div class="row-cell info">20.12.2020</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Срок действия</div>
                    <div class="row-cell info">1 год</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Стороны договора</div>
                    <div class="row-cell info">ООО Аврора Собственники объекта жилищного фонда</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Основание заключения</div>
                    <div class="row-cell info">Решение собрания собственников</div>
                  </div>
                </div>
                <div class="contract-card-footer">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </div>
              </div>
              <div class="contract-card">
                <div class="contract-card-header">
                  <div class="contract-title">Договор управления № 1</div>
                  <div class="contract-status">действующий</div>
                </div>
                <div class="contract-card-body">
                  <div class="contract-card-body-row">
                    <div class="row-cell">Дата заключения</div>
                    <div class="row-cell info">20.12.2020</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Срок действия</div>
                    <div class="row-cell info">1 год</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Стороны договора</div>
                    <div class="row-cell info">ООО Аврора Собственники объекта жилищного фонда</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Основание заключения</div>
                    <div class="row-cell info">Решение собрания собственников</div>
                  </div>
                </div>
                <div class="contract-card-footer">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </div>
              </div>
              <div class="contract-card">
                <div class="contract-card-header">
                  <div class="contract-title">Договор управления № 1</div>
                  <div class="contract-status">действующий</div>
                </div>
                <div class="contract-card-body">
                  <div class="contract-card-body-row">
                    <div class="row-cell">Дата заключения</div>
                    <div class="row-cell info">20.12.2020</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Срок действия</div>
                    <div class="row-cell info">1 год</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Стороны договора</div>
                    <div class="row-cell info">ООО Аврора Собственники объекта жилищного фонда</div>
                  </div>
                  <div class="contract-card-body-row">
                    <div class="row-cell">Основание заключения</div>
                    <div class="row-cell info">Решение собрания собственников</div>
                  </div>
                </div>
                <div class="contract-card-footer">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </div>
              </div>
            </div>
            <div class="contracts-filter">
              <div class="filter-card">
                <div class="filter-card-title">Фильтр</div>
                <div class="filter-card-body">
                  <div class="filter-card-body-row">
                    <div class="row-title">Дата заключения</div>
                    <div class="row-field">
                      <input type="date" class="filter-input" placeholder="дд.мм.гггг" />
                    </div>
                  </div>
                  <div class="filter-card-body-row">
                    <div class="row-title">Дата добавления</div>
                    <div class="row-field">
                      <input type="date" class="filter-input" placeholder="дд.мм.гггг" />
                    </div>
                  </div>
                  <div class="filter-card-body-row">
                    <div class="row-title">Номер договора</div>
                    <div class="row-field"><input type="text" class="filter-input" /></div>
                  </div>
                </div>
                <div class="filter-card-footer"></div>
              </div>
            </div>
          </div>
          <div v-if="activetab === 2" class="tab-content-item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appContentActions from '../components/appContentActions';
export default {
  data() {
    return {
      activetab: 1,
    };
  },
  components: {
    appContentActions,
  },
};
</script>
