<template>
  <div class="document-list">
    <AppContentActions :btns="['Добавить договор']" />
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
            <div class="documents-cards">
              <div class="document-card">
                <div class="document-card-header">
                  <div class="document-title">Договор управления № 1</div>
                  <div class="document-status">действующий</div>
                </div>
                <div class="document-card-body">
                  <div class="document-card-body-row">
                    <div class="row-cell">Дата заключения</div>
                    <div class="row-cell info">20.12.2020</div>
                  </div>
                  <div class="document-card-body-row">
                    <div class="row-cell">Срок действия</div>
                    <div class="row-cell info">1 год</div>
                  </div>
                  <div class="document-card-body-row">
                    <div class="row-cell">Стороны договора</div>
                    <div class="row-cell info">ООО Аврора Собственники объекта жилищного фонда</div>
                  </div>
                  <div class="document-card-body-row">
                    <div class="row-cell">Основание заключения</div>
                    <div class="row-cell info">Решение собрания собственников</div>
                  </div>
                </div>
                <div class="document-card-footer">
                  612260, обл Кировская, р-н Яранский, г Яранск, ул Строительная, д. 9
                </div>
              </div>
            </div>
            <div class="documents-filter">
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
                <div class="filter-card-footer">
                  <div class="filter-document-status">
                    <div class="status">
                      <button class="status-btn ">Все</button>
                      <button class="status-btn active">Действующий</button>
                      <button class="status-btn">Расторгнут</button>
                    </div>
                  </div>
                  <div class="filter-buttons">
                    <div class="filter-buttons-group">
                      <button class="btn btn-success filter-btn">Применить</button>
                      <button class="btn btn-gray filter-btn">Сбросить</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="activetab === 2" class="tab-content-item">
            <div class="documents-cards">
              <div class="document-card">
                <div class="document-card-header">
                  <div class="document-title">Протокол общего собрания собственников № 1</div>
                </div>
                <div class="document-card-body">
                  <div class="document-card-body-row">
                    <div class="row-cell">Дата проведения</div>
                    <div class="row-cell info">20.12.2020</div>
                  </div>
                  <div class="document-card-body-row">
                    <div class="row-cell">Адрес</div>
                    <div class="row-cell info">г Яранск, ул Строительная, д. 9</div>
                  </div>
                  <div class="document-card-body-row">
                    <div class="row-cell">Протокол</div>
                    <div class="row-cell info">Протокол Строительная.pdf</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="documents-filter">
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
                <div class="filter-card-footer">
                  <div class="filter-buttons">
                    <div class="filter-buttons-group">
                      <button class="btn btn-success filter-btn">Применить</button>
                      <button class="btn btn-gray filter-btn">Сбросить</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppContentActions from '../components/AppContentActions';
export default {
  data() {
    return {
      activetab: 1,
    };
  },
  components: {
    AppContentActions,
  },
};
</script>
