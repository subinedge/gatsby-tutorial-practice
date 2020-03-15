import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Navbar from '../components/navbar'
import '../sass/layout.scss'

const Layout = (props) => {
  const {site:{siteMetadata:info}} = useStaticQuery(graphql`{
  site {
    siteMetadata {
      title
      description
    }
  }
}
  `)
  
  return (
    <>
      <div>
        <h1>Title: {info.title}</h1>
        <h3><em>Tagline</em>: {info.description}</h3>
      </div>
      <Navbar/>
      <main>{props.children}</main>
    </>
  )
}

export default Layout;
