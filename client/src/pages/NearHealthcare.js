import React from 'react';
import MyMapComponent from '../components/MyMap';
import Navbar from '../components/Navbar'

const NearHealthcare = () => {
  return (
    <>
      <Navbar />
      <div className="appointment-bar-top mt-3 d-flex align-items-center">
        <div className="our-doctors-content">
          <h1 className=' display-3'>Nearby Healthcare</h1>
        </div>
      </div>

      <div className="mt-5 body-contact container-fluid d-flex flex-row justify-content-around mb-5">
        <div className="left-side pe-5 mt-4">
          <MyMapComponent />
        </div>
      </div>
    </>
  );
};
export default NearHealthcare;