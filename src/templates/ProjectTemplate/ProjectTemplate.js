import React from 'react';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ProjectHeroSection from '../../components/ProjectHeroSection/ProjectHeroSection';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import ProjectDescriptionSection from '../../components/ProjectDescriptionSection/ProjectDescriptionSection';

import ProjectContent from '../../components/ProjectContent/ProjectContent';
import ProjectFooter from '../../components/ProjectFooter/ProjectFooter';

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
];

const projectInfo = [
  { title: 'Role', items: 'Frontend developer, Designer' },
  {
    title: 'Tech Stack',
    items:
      'ReactJS/ ReactNative, Redux, MaterialUI, Spring Boot, Docker, PostrgreSQL',
  },
  { title: 'Date', items: '09.2020 - 02.2021' },
];

const content = [
  {
    title: 'Take control of your restaurant',
    description:
      'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.',
    images,
    center: true,
    skewLeft: true,
    color: 'tertiary',
  },
  {
    title: 'Order meal whenever you want',
    description:
      'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.',
    images: [images[0], images[1]],
    center: true,
    light: true,
    color: 'secondary',
  },
];

const ProjectTemplate = () => (
  <>
    <ProjectHeader />
    <ProjectHeroSection
      image={images[0]}
      github="https:/123123"
      title="Restaurant Management"
      subtitle="Mobile & Web application"
    />
    <ProjectInfo projectInfo={projectInfo} />

    <ProjectDescriptionSection
      title="Restaurant Management"
      description="Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki."
      descriptionImage={images[0]}
    />
    {content.map((contentArticle) => (
      <ProjectContent key={contentArticle.title} {...contentArticle} />
    ))}

    <ProjectFooter />
  </>
);
export default ProjectTemplate;
