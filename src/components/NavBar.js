import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <nav className="navbar is-link" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                    <Link to='/artists' style={{padding: '10px', color: 'white' }}>   Show Artists  </Link>

                    <Link to='/artists/new' style={{padding: '10px', color: 'white' }}> Add New Artist</Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar