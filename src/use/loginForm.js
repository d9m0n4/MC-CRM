import { useField, useForm } from 'vee-validate';
import { useStore } from 'vuex';
import * as yup from 'yup';

export function useLoginForm() {
  const store = useStore();
  const { handleSubmit, isSubmitting } = useForm();
  const { value: lValue, errorMessage: lError, handleBlur: lBlur } = useField(
    'email',
    yup
      .string()
      .email('Введите Email')
      .required('Поле не должно быть пустым'),
  );
  const { value: pValue, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .required('Поле не должно быть пустым')
      .min(6, 'Пароль не может быть меньше 6 символов'),
  );
  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log(values);
      await store.dispatch('auth/login', values);
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  });

  return {
    onSubmit,
    lValue,
    lError,
    lBlur,
    pValue,
    pError,
    pBlur,
    isSubmitting,
  };
}
