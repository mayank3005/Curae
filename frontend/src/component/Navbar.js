import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { userContext } from '../App';
import logo from '../images/logo.png';

const Navbar = () => {

  const { state, dispatch } = useContext(userContext);

  const RenderMenu = () => {

    if (!state) {

      return (<>
        <li className="nav-item">
          <NavLink aria-current="page" to='/'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/about'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/contact'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/products'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Buy-Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/login'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            SignIn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/register'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Register</NavLink>
        </li>
      </>)
    } else {
      return (<>
        <li className="nav-item">
          <NavLink aria-current="page" to='/'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/about'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/contact'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/products'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Buy-Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/profile'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/logout'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Logout</NavLink>
        </li>

      </>)
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-4">
          <NavLink className="navbar-brand" href="/">
            <img src={logo} width="160px" height="45px" alt="" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <RenderMenu />

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar