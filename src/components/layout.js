import React from 'react'
import Navbar from '../components/navbar'
import '../sass/layout.scss'

const Layout = (props) => {
  return (
    <>
      <Navbar/>
      <main>{props.children}</main>
    </>
  )
}

export default Layout;
