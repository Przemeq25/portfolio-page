import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ProjectHeroSection from '../../components/ProjectHeroSection/ProjectHeroSection';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import ProjectDescriptionSection from '../../components/ProjectDescriptionSection/ProjectDescriptionSection';
import ProjectContent from '../../components/ProjectContent/ProjectContent';
import ProjectFooter from '../../components/ProjectFooter/ProjectFooter';
import { BottomBackground } from './ProjectTemplate.styles';
import SEO from '../../components/seo';
import { GlobalStyles } from '../../themes/GlobalStyles';
import { theme } from '../../themes/theme';

const ProjectTemplate = ({ pageContext: { data, prevPage, nextPage } }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO title={data.title} />
      <ProjectHeader
        prevProject={{ title: prevPage.title, slug: prevPage.slug }}
        nextProject={{ title: nextPage.title, slug: nextPage.slug }}
      />
      <ProjectHeroSection
        image={data.thumbnail}
        github={data.github}
        title={data.title}
        subtitle={data.subtitle}
        live={data.live}
      />
      <ProjectInfo projectInfo={data.projectInfo} />

      <ProjectDescriptionSection
        title={data.title}
        description={data.description}
        descriptionImage={data.descriptionImage}
      />
      {data.content?.map((contentArticle) => (
        <ProjectContent key={contentArticle.title} {...contentArticle} />
      ))}
      <BottomBackground />
      <ProjectFooter info={data.projectFooterInfos} />
    </ThemeProvider>
  </>
);
export default ProjectTemplate;

ProjectTemplate.propTypes = {
  pageContext: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.shape({
        fileName: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      description: PropTypes.string.isRequired,
      descriptionImage: PropTypes.shape({
        fileName: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      github: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      live: PropTypes.string,
      projectInfo: PropTypes.shape({
        date: PropTypes.string,
        role: PropTypes.string,
        techStack: PropTypes.string,
      }),
      content: PropTypes.arrayOf(PropTypes.object),
      projectFooterInfos: PropTypes.arrayOf(
        PropTypes.shape({
          heading: PropTypes.string.isRequired,
          paragraph: PropTypes.string.isRequired,
        }),
      ),
    }),
    prevPage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
    nextPage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
