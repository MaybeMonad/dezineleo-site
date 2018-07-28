const path = require('path');
const _ = require('lodash');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/blogTemplate.js');
  const projectTemplate = path.resolve('src/templates/projectTemplate.js');
  const tagTemplate = path.resolve('src/templates/tagTemplate.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              tags
              title
              date
              author
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    const posts = res.data.allMarkdownRemark.edges;

    // Create post detail pages
    posts.forEach(({ node }) => {
      console.log(/^\/projects\//.test(node.frontmatter.path))
      if (/^\/projects\//.test(node.frontmatter.path)) {
        createPage({
          path: node.frontmatter.path,
          component: projectTemplate,
        })
      } else {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        });
      }
      
    });

    // const projects = res.data.allMarkdownRemark.edges;
    
    // create project detial pages
    // projects.forEach(({ node }) => {
    //   createPage({
    //     path: node.frontmatter.path,
    //     component: projectTemplate,
    //   })
    // })

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
  });
}
