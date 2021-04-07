import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import SEO from '../components/seo';
import Layout from '../templates/Layout/Layout';
import { PageContainer } from '../templates/PageTemplate/PageTemplate.styles';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <PageContainer>
      <ContactForm mail="przemekcichon97@gmail.com" />
    </PageContainer>
  </Layout>
);

export default Contact;
