import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import WhatToRender from './WhatToRender';
import { Badge } from 'antd';

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Done');
    localStorage.clear();
    window.location.reload();
    navigate('/login');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="#">
            <img src={logo} width="140" height="40" alt="" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink aria-current="page" to='/'
                  className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                  Home</NavLink>
              </li>

              <WhatToRender user={user} />

              <li className="nav-item">
                <NavLink aria-current="page" to='/contact'
                  className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                  Contact Us</NavLink>
              </li>
            </ul>
            {localStorage.getItem('token') ?
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="nav-item">
                  <NavLink aria-current="page" to='/notification'
                    className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                    <Badge
                      count={user && user.notification.length}
                      onClick={() => {
                        navigate("/notification");
                      }}
                    >
                      <i className="fa-solid fa-bell fa-xl"></i>
                    </Badge>
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink aria-current="page"
                    className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}
                    onClick={handleLogout}>
                    Logout</NavLink>
                </div>
              </ul> :
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="nav-item">
                  <NavLink aria-current="page" to='/login'
                    className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                    Login</NavLink>
                </div>
                <div className="nav-item">
                  <NavLink aria-current="page" to='/register'
                    className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
                    Register</NavLink>
                </div>
              </ul>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar