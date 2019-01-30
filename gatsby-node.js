/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const fs = require('fs');

exports.createPages = ({ boundActionCreators, graphql }) => {
  if (process.env.NODE_ENV !== 'development') {
    fs.closeSync(fs.openSync('./public/webpack.stats.json', 'w'));
  }
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/Posts.jsx`);
  const postsByTag = path.resolve(`src/templates/PostsByTag.jsx`);

  boundActionCreators.createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/about`,
  });

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    let tags = new Set();

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
      node.frontmatter.tags.forEach(tag => tags.add(tag));
    });

    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag
          .toLowerCase()
          .split(' ')
          .join('-')}/`,
        component: postsByTag,
        context: {
          tag,
        },
      });
    });
  });
};
