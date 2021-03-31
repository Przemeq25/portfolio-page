import React from 'react';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import { ProjectContainer } from '../../components/ProjectContainer/ProjectContainer.styles';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ProjectHeroSection from '../../components/ProjectHeroSection/ProjectHeroSection';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';

import {
  ContentBackgroundContainer,
  ContentImage,
  ContentTextWrapper,
  ContentSection,
  DescriptionTextWrapper,
  DescrtiptionImage,
  ProjectFooter,
  HeadingWithLine,
  ProjectDescrtiptionSection,
  StyledSpan,
  ProjectFooterInfoWrapper,
  DescriptionWrappepr,
  FooterActionWrapper,
  BackToTopButton,
} from './ProjectTemplate.styles';

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

    <ProjectDescrtiptionSection>
      <ProjectContainer>
        <DescriptionWrappepr>
          <DescriptionTextWrapper>
            <Heading
              size="lg"
              weight="black"
              transform="capitalize"
              variant="h3"
              margin={30}
            >
              What is <StyledSpan>Restaurant Management</StyledSpan>?
            </Heading>
            <Paragraph size="md" color="tertiary">
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
            </Paragraph>
          </DescriptionTextWrapper>
          <DescrtiptionImage content={images[1]} />
        </DescriptionWrappepr>
      </ProjectContainer>
    </ProjectDescrtiptionSection>

    <ContentSection>
      <ContentBackgroundContainer center skewLeft color="tertiary">
        <ProjectContainer>
          <ContentTextWrapper>
            <HeadingWithLine
              size="lg"
              weight="black"
              transform="capitalize"
              variant="h3"
            >
              Take control of your restaurant
            </HeadingWithLine>
            <Paragraph size="md">
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
            </Paragraph>
          </ContentTextWrapper>
        </ProjectContainer>
      </ContentBackgroundContainer>
      <ProjectContainer>
        <ContentImage content={images[2]} />
        <ContentImage content={images[3]} />
      </ProjectContainer>
      <ContentBackgroundContainer center skewRight color="secondary" light>
        <ProjectContainer>
          <ContentTextWrapper>
            <HeadingWithLine
              size="lg"
              weight="black"
              transform="capitalize"
              variant="h3"
            >
              Take control of your restaurant
            </HeadingWithLine>
            <Paragraph size="md">
              Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
              przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
              przez nieznanego drukarza do wypełnienia tekstem próbnej książki.
            </Paragraph>
          </ContentTextWrapper>
        </ProjectContainer>
      </ContentBackgroundContainer>
      <ProjectContainer>
        <ContentImage content={images[2]} />
        <ContentImage content={images[3]} />
      </ProjectContainer>
    </ContentSection>
    <ProjectFooter>
      <ProjectContainer>
        <ProjectFooterInfoWrapper>
          <div>
            <Heading
              variant="h4"
              size="md"
              color="primary"
              weight="black"
              transform="capitalize"
            >
              Backend developer
            </Heading>
            <Paragraph size="sm">Artur Kowalski</Paragraph>
          </div>
          <div>
            <Heading
              variant="h4"
              size="md"
              color="primary"
              weight="black"
              transform="capitalize"
            >
              Project purpose
            </Heading>
            <Paragraph size="sm">Engineering work</Paragraph>
          </div>
        </ProjectFooterInfoWrapper>
        <FooterActionWrapper>
          <BackToTopButton small>Back to top</BackToTopButton>
        </FooterActionWrapper>
      </ProjectContainer>
    </ProjectFooter>
  </>
);
export default ProjectTemplate;
