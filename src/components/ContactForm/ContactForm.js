import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  ErrorText,
  FormContainer,
  FormInput,
  FormLabel,
  FormTextArea,
  InputWrapper,
  MailLink,
  SendMessageWrapper,
} from './ContactForm.styles';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import { contactFormValidation } from '../../utils/contactFormValidation';

const ContactForm = ({ mail }) => (
  <Formik
    initialValues={{ email: '', name: '', message: '' }}
    validationSchema={contactFormValidation}
  >
    {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
      <FormContainer onSubmit={handleSubmit} noValidate>
        <MailLink href={`mailto:${mail}`}>{mail}</MailLink>
        <Heading as="h2" color="primary" weight="bold" size="xl" margin={50}>
          Have questions?
        </Heading>
        <InputWrapper>
          <FormInput
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && touched.email ? (
            <ErrorText>{errors.email}</ErrorText>
          ) : null}
          <FormLabel>Email</FormLabel>
        </InputWrapper>
        <InputWrapper>
          <FormInput
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && touched.name ? (
            <ErrorText>{errors.name}</ErrorText>
          ) : null}
          <FormLabel>Name</FormLabel>
        </InputWrapper>
        <InputWrapper>
          <FormTextArea
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.message && touched.message ? (
            <ErrorText>{errors.message}</ErrorText>
          ) : null}
          <FormLabel>Message</FormLabel>
        </InputWrapper>
        <SendMessageWrapper>
          <Button small type="submit">
            Send
          </Button>
        </SendMessageWrapper>
      </FormContainer>
    )}
  </Formik>
);

export default ContactForm;

ContactForm.propTypes = {
  mail: PropTypes.string.isRequired,
};
