const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      portfolio {
        page: projectsConnection {
          edges {
            node {
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
      }
    }
  `);
  const pages = result.data.portfolio.page.edges;

  pages.forEach(({ node }, index) => {
    createPage({
      path: node.slug,
      component: path.resolve(
        `./src/templates/ProjectTemplate/ProjectTemplate.js`,
      ),
      context: {
        data: node,
        prevPage:
          index === 0 ? pages[pages.length - 1].node : pages[index - 1].node,
        nextPage:
          index === pages.length - 1 ? pages[0].node : pages[index + 1].node,
      },
    });
  });
};
