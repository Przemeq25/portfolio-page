const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      portfolio {
        projects {
          descriptionImage {
            fileName
            url
          }
          github
          live
          projectFooterInfos {
            heading
            paragraph
          }
          slug
          subtitle
          thumbnail {
            fileName
            url
          }
          title
          description
          content {
            background
            title
            description
            images {
              fileName
              url
              shadow
            }
          }
          projectInfo {
            date
            role
            techStack
          }
        }
      }
    }
  `);
  const pages = result.data.portfolio.projects;

  pages.forEach((node, index) => {
    createPage({
      path: node.slug,
      component: path.resolve(
        `./src/templates/ProjectTemplate/ProjectTemplate.js`,
      ),
      context: {
        data: node,
        prevPage: index === 0 ? pages[pages.length - 1] : pages[index - 1],
        nextPage: index === pages.length - 1 ? pages[0] : pages[index + 1],
      },
    });
  });
};
