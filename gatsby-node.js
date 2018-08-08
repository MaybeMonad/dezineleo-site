const path = require('path');
const _ = require('lodash');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({
  boundActionCreators,
  graphql
}) => {
  const {
    createPage
  } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/blogTemplate.js');
  const projectTemplate = path.resolve('src/templates/projectTemplate.js');
  const tagTemplate = path.resolve('src/templates/tagTemplate.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
        filter: {
          frontmatter: {
            published: { eq: true }
            type: { eq: "post" }
          }
        }
      ) {
        edges {
          node {
            html
            timeToRead
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY")
              author
              excerpt
              thumbnail {
                childImageSharp {
                  sizes(maxWidth: 400, maxHeight: 240) {
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
              categories
              tags
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

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: "src/templates/blog.js",
      pageLength: 6, // This is optional and defaults to 10 if not used
      pathPrefix: "blog", // This is optional and defaults to an empty string if not used
      context: {} // This is optional and defaults to an empty object if not used
    });

    // Create post detail pages
    posts.forEach(({
      node
    }) => {
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