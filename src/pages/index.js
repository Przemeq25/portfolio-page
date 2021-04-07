import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../templates/Layout/Layout';
import SEO from '../components/seo';
import Slider from '../components/Slider/Slider';

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      portfolio {
        projects {
          id
          slug
          title
          subtitle
          thumbnail {
            url
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Projects" />
      <Slider slides={data.portfolio.projects} />
    </Layout>
  );
};

export default HomePage;
