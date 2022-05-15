import React from 'react'
import { Link,Route } from 'react-router-dom'

const Header = () => {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">lawblaze</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <Link className="nav-link fw-bold py-1 px-0 " to="/Register">Register</Link>
          <Link className="nav-link fw-bold py-1 px-0" to="/Login">Login</Link>
          <Link className="nav-link fw-bold py-1 px-0" to="/">Home</Link>
      
        </nav>
      </div>
      </header>
  )
}

export default Header