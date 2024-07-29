import React from 'react'
import './NavBar.css'
import logo from '../images/logo.PNG'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary shadow-sm">
  <div className="container-fluid">
    <NavLink className="navbar-brand ms-5" to='/'>
        <img src={logo} alt="Logo" width='150px'/>
    </NavLink>
    <form className="d-flex me-5 icon-wrapper" role="search">
      <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" aria-label="Search" />
      <a className='nav-link text-dark fs-5 p-2 search-icon' href='#'><i className="fa-solid fa-magnifying-glass"></i></a>
      <NavLink className='nav-link text-dark fs-5 p-2' to='/posts'><i className="fa-solid fa-home"></i></NavLink>
      <a className='nav-link text-dark fs-5 p-2' href='#'><i className="fa-regular fa-heart"></i></a>

      <div className="dropdown-center">
        <a className="text-black" href="#" role="" data-bs-toggle="dropdown">
          <img className="p-2 nav-profile-picture" src='https://images.unsplash.com/photo-1687319000074-90e2048df2f8?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='profile-pic'/>
        </a>

        <ul class="dropdown-menu dropdown-menu-end">
          <li className='dropdown-item'>
            <NavLink className='nav-link text-dark' to='/my-profile'>My Profile</NavLink>
          </li>
          <li className='dropdown-item'>
            <NavLink className='nav-link text-danger' to='/login'>Logout</NavLink>
          </li>
        </ul>
      </div>

      
    </form>
  </div>
</nav>
    </div>
  )
}

export default NavBar
