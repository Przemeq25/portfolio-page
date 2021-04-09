import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../components/Button/Button';
import Heading from '../components/Heading/Heading';
import List from '../components/List/List';
import Paragraph from '../components/Paragraph/Paragraph';
import SEO from '../components/seo';
import { about } from '../data/aboutData';
import Layout from '../templates/Layout/Layout';
import { PageContainer } from '../templates/PageTemplate/PageTemplate.styles';

const About = () => {
  const aboutRef = useRef(null);
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  useEffect(() => {
    gsap.fromTo(
      [...aboutRef.current.children],
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0, stagger: 0.2 },
    );
  }, []);

  return (
    <Layout center>
      <SEO title="About" />
      <PageContainer ref={aboutRef}>
        <Heading as="h2" color="primary" weight="bold" size="xl" margin={50}>
          About me
        </Heading>
        <Paragraph size="md" margin={10} weight="medium">
          {about.description}
        </Paragraph>
        <Paragraph size="md" margin={45} weight="medium">
          {about.sdDescription}
        </Paragraph>
        <Heading as="h3" weight="bold" size="md" margin={16} color="tertiary">
          My skills
        </Heading>
        <List items={about.skills} />
        <Button
          small
          as="a"
          href={`${data.allFile.edges[0].node.publicURL}`}
          download
        >
          Download CV
        </Button>
      </PageContainer>
    </Layout>
  );
};

export default About;
