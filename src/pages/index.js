import * as React from 'react';
import Layout from '../templates/Layout/Layout';
import SEO from '../components/seo';
import Slider from '../components/Slider/Slider';

const content = [
  {
    image:
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    title: 'Restaurant Management',
    subtitle: 'Mobile & Web application',
    path: '/restaurantmanagement',
  },
  {
    image:
      'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    title: 'FollowMe',
    subtitle: 'Mobile & Web application',
    path: '/followme',
  },
  {
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    title: 'Students List',
    subtitle: 'Web application',
    path: '/studentslist',
  },
];

const HomePage = () => (
  <Layout>
    <SEO title="Projects" />
    <Slider slides={content} />
  </Layout>
);

export default HomePage;
