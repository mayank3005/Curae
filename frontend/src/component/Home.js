import React from 'react'
import Specialities from './Specialities'
import doctor from '../images/doctor_png.png';
import Faq from './Faq'
import Footer from './Footer';
import Consultations from './Consultations';
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 d-flex flex-column justify-content-center">
            <h1 className="heading">
              Consult a doctor anytime,anywhere by <span className=' text-decoration-underline'>video call</span>
            </h1>
            <div className="below-heading mt-5">

              <div className="btn button-34 px-5" style={{ fontSize: '1.2rem' }}>Ask a Doctor Online</div>
              <div className="btn button-34 ms-4" style={{ fontSize: '1.2rem' }}>Unlimited Chat</div>
            </div>
          </div>
          <div className="col-4">
            <img src={doctor} alt="Doctor" />
          </div>
        </div>
      </div>
      <Specialities />
      <Consultations />
      <Faq />
    </>
  )
}

export default Home