import * as Yup from 'yup';

export const contactFormValidation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  name: Yup.string()
    .min(2, 'Minimum 2 chars required')
    .required('Name is required'),
  message: Yup.string()
    .min(2, 'Minimum 2 chars required')
    .required('Message is required'),
});
