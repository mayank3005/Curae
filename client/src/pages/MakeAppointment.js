import React from 'react'
import Navbar from '../components/Navbar'

const MakeAppointment = () => {
  return (
    <>
      <Navbar />
      <div className="appointment-bar-top mt-3 d-flex align-items-center">
        <div className="our-doctors-content">
          <h1 className=' display-3'>Book Appointment</h1>
        </div>
      </div>
    </>
  )
}

export default MakeAppointment