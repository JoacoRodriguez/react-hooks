import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">UseContext</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <NavLink to='/' className={'nav-link'}>
                Home
              </NavLink>
              <NavLink to='/about' className={'nav-link'}>
                About
              </NavLink>
              <NavLink to='/login' className={'nav-link'}>
                Login
              </NavLink>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}
