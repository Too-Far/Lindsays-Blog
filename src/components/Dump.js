//*Component that displays results from a graphql query
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Dump = () => {
  const data = useStaticQuery(graphql`
    {
      LB {
        authors {
          bibliography
          name
          picture {
            url
          }
          posts(last: 3) {
            slug
            title
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Dump
