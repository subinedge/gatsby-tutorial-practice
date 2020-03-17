import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/404">Error</Link></li>
          <li><Link to="/images">Images</Link></li>
          <li><Link to="/tours">Tours</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
