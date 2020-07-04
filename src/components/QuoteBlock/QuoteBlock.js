import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./QuoteBlock.module.css"

const QuoteBlock = () => {
  const data = useStaticQuery(graphql`
    {
      LB {
        quotes {
          body
          author
        }
      }
    }
  `)
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.QuoteBlockContainer}>
        {data.LB.quotes.map(i => (
          <div>
            <q>{i.body}</q>
            <h3>- {i.author}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
export default QuoteBlock
