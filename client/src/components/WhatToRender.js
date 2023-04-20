import React from 'react'
import { NavLink } from 'react-router-dom';

const WhatToRender = ({ user }) => {
  if (!user) {
    return (
      null
    )
  }
  else if (user.isAdmin) {
    return (
      <>
        <li className="nav-item">
          <NavLink aria-current="page" to='/admin/doctors'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Doctors</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/admin/users'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Users</NavLink>
        </li>
      </>
    );
  }
  else if (user.isDoctor) {
    return (
      <>
        <li className="nav-item">
          <NavLink aria-current="page" to={`/doctor/doctor-appointments`}
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Appointments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to={`/doctor/profile/${user?._id}`}
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Profile</NavLink>
        </li>
      </>
    )
  } else {
    return (
      <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" style={{ fontSize: '1.2rem' }} href="/bookappointment">Book Appointments</a>
            <a className="dropdown-item" style={{ fontSize: '1.2rem' }} href="/buymedicine">Buy Medicines</a>
            <a className="dropdown-item" style={{ fontSize: '1.2rem' }} href="/nearhealthcare">Nearby Healthcare</a>
          </div>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/apply-doctor'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            Apply-Doctor</NavLink>
        </li>
        <li className="nav-item">
          <NavLink aria-current="page" to='/faq-section'
            className={({ isActive }) => { return isActive ? 'menu-active nav-link' : 'nav-link'; }}>
            FAQ</NavLink>
        </li>
      </>
    )
  }
}

export default WhatToRender