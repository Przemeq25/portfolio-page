import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
        <Paragraph size="md" margin={50} weight="light">
          {about.description}
        </Paragraph>
        <Heading as="h3" weight="bold" size="md" margin={16} color="tertiary">
          My skills
        </Heading>
        <List items={about.skills} />
        <Button small>Download CV</Button>
      </PageContainer>
    </Layout>
  );
};

export default About;
