import React from 'react'
import Layout from '../components/layout'
import ToursComponent from '../components/tours/tours'
import {graphql} from 'gatsby'

const Tours = ({data}) => {
  return (
    <Layout>
      <ToursComponent tours={data.tours.edges}/>
    </Layout>
  )
}

export const getTours = graphql`
  query{
  tours:allContentfulTour {
    edges {
      node {
        name
        price
        slug
        country
        key:contentful_id
        days
        images {
       		fluid {
             ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}
`

export default Tours
