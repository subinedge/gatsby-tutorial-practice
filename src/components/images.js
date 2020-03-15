import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

const getImages = graphql`
  {
  fixed:file(relativePath:{eq:"image1.jpg"}) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid:file(relativePath:{eq:"image2.jpg"}){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const ImageComponent = () => {
  const images = useStaticQuery(getImages);
  console.log(images);
  
  return (
    <div>
      <h2>Images component</h2>  
      <Image fixed={images.fixed.childImageSharp.fixed}/>
      <Image fluid={images.fluid.childImageSharp.fluid}/>
    </div>
  )
}

export default ImageComponent;
