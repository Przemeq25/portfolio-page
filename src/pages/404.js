import * as React from 'react';
import Layout from '../templates/Layout/Layout';
import SEO from '../components/seo';
import { PageContainer } from '../templates/PageTemplate/PageTemplate.styles';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import Button from '../components/Button/Button';
import NavigationTransitionLink from '../providers/NavigationTransitionLink';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageContainer>
      <Heading as="h2" color="primary" weight="bold" style={{ fontSize: 250 }}>
        404
      </Heading>
      <Paragraph size="md" margin={70} weight="regular" align="center">
        There&#39;s nothing here
      </Paragraph>
      <NavigationTransitionLink
        path="/"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: 'translateX(-50%)',
        }}
      >
        <Button>Go to home page</Button>
      </NavigationTransitionLink>
    </PageContainer>
  </Layout>
);

export default NotFoundPage;
