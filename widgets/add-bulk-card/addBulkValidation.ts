import * as yup from 'yup';

export const addBulkFormValidation = yup.object().shape({
  items: yup
    .array()
    .min(1)
    .of(
      yup.object().shape({
        quantity: yup.number().min(1, ''),
        productNumber: yup.string().required('').min(1, '').max(200, ''),
      })
    ),
});
