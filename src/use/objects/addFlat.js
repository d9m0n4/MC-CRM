import { computed, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default async function useAddFlat() {
  const store = useStore();

  const objects = computed(() => store.getters['objects/objects']);

  const obj = {};
  const flatNum = ref('');
  const flatArea = ref('');

  const onSubmit = async () => {
    obj.value.quarters.forEach((el) => {
      if (el.flatNum === flatNum.value) {
        store.commit('setMessage', { type: 'danger', value: 'Квартира уже есть!' });
        flatNum.value = '';
      }
    });

    const oneObject = obj.value;
    oneObject.quarters.push({
      flatNum: flatNum.value,
      flatArea: flatArea.value,
    });
    await store.dispatch('objects/updateObject', oneObject);
    flatArea.value = '';
    flatNum.value = '';
  };

  return {
    obj: obj.value,
    flatNum: flatNum.value,
    flatArea: flatArea.value,
    onSubmit,
    objects: objects.value,
  };
}
