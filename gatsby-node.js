/*
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/*
 * Creates a page for every blog "slug". uses Gatsbys create  * page function. Also creates pagination. The context is      *passed into each blog page (blogPosts.js in templates).
 */
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  //path to blog post template
  const blogPostTemplate = path.resolve(`src/templates/BlogPosts.js`)
  //graphql query
  return graphql(`
    query loadPagesQuery {
      LB {
        postsConnection {
          edges {
            node {
              author {
                name
                picture {
                  authorAvatar {
                    picture {
                      url
                    }
                  }
                }
              }
              coverImage {
                url
              }
              date
              excerpt
              markdown
              slug
              tags
              title
              content {
                markdown
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.LB.postsConnection.edges
    //loop through all results, then create page for each
    posts.forEach(({ node }, index) => {
      const prev = index === 0 ? false : posts[index - 1].node
      const next = index === posts.length - 1 ? false : posts[index + 1].node
      createPage({
        path: `${node.slug}`,
        component: blogPostTemplate,
        context: {
          node, //passes the entire dataset to component. Can
          // refine by piece i.e. title: edge.node.title
          prev,
          next,
        },
      })
    })
    return posts
  })
}
//* End create page
