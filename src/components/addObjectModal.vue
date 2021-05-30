<template>
  <div class="modal">
    <div class="bg-layer" @click="$emit('closeModal')"></div>
    <div class="modal-group">
      <div class="modal-header">
        <div class="modal-title">Добавление объекта управления</div>
        <div class="modal-close-btn" @click="$emit('closeModal')">
          <img src="../assets/img/icons/close.svg" alt="" />
        </div>
      </div>
      <div class="modal-body">
        <div class="form-field">
          <div class="form-field-row">
            <div class="field-cell">Регион/район</div>
            <div class="field-cell input">
              <input type="text" class="address-input" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Город/ н.п.</div>
            <div class="field-cell input">
              <input type="text" class="address-input" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Улица</div>
            <div class="field-cell input">
              <input type="text" class="address-input" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Дом</div>
            <div class="field-cell input">
              <input type="text" class="address-input" />
            </div>
          </div>
          <div class="form-field-row">
            <div class="field-cell">Год постройки</div>
            <div class="field-cell input">
              <input type="text" class="address-input" />
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-accent btn-large">Добавить</button>
      </div>
    </div>
  </div>
</template>
