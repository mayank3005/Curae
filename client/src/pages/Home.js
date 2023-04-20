import React, { useRef } from 'react'
import Card from '../components/Card'
import CircularCard from '../components/CircularCard'
import doctor1 from '../images/doc7.jpg'
import what1 from '../images/what1.png'
import what2 from '../images/location.jpg'
import what3 from '../images/medicines.jpg'
import what4 from '../images/newsletter.jpg'
import services1 from '../images/orthopaedics.png'
import services2 from '../images/dentistry.png'
import services3 from '../images/pediatrician.png'
import services4 from '../images/neurology.png'
import services5 from '../images/dermatologist.png'
import services6 from '../images/cardiology.png'
import services7 from '../images/urologist.png'
import services8 from '../images/Ophthalmologist.png'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux'
import { message } from 'antd'

const Home = () => {

  const form = useRef();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ts27k9v', 'template_hdmohzj', form.current, '6M44MdB6pJFItGiXO')
      .then(() => {
        message.success('You have successfully subscribed to our newsletter.')
        e.target.reset();
      }, () => {
        message.error('There is some error while signing to the newsletter.')
      });
  };

  return (
    <>
      <Navbar />

      <div className="first-section">
        <div className="first-section-content">
          <h1 className='display-3'>Curae: Virtual Healthcare for All </h1>
          <p className="first-content-p my-5">Curae is the solution to the problem of limited access to quality healthcare. Our platform offers virtual
            healthcare services that are accessible to everyone, providing users with the tools they need to take control of their health and well-being.</p>
          <button className="button-19" onClick={navigate('/faq-section')}>Know More</button>
        </div>
      </div>

      {
        user?.isDoctor ? null :
          <>
            <div className="apply-doctor-section d-flex px-5">
              <div className="apply-doctor-image-section">
                <img src={doctor1} className='home-doctor1-img' alt="Apply-doctor-img" />
              </div>
              <div className="apply-doctor-content d-flex flex-column justify-content-center align-items-center">
                <div className=" text-center">
                  <h1 className="display-4 m-0">Join us in our noble cause</h1>
                </div>
                <div className="text-center w-75 mt-5 mb-4">
                  <p className='first-content-p'>Doctors can apply to join our platform and expand their practice by offering teleconsultations, prescribing medications through our online
                    pharmacy, and building a strong online presence. As a registered doctor on Curae, you will have access to a range of resources and tools
                    to better serve your patients and grow your practice. Join our network of healthcare professionals to reach a wider patient base and build
                    your online presence as a healthcare provider.</p>
                </div>
                <button className="btn btn-primary py-2 px-4" onClick={() => navigate('/apply-doctor')}>Apply As Doctor</button>
              </div>
            </div>

            <section className="home-newsletter">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-12">
                    <div className="single">
                      <h2>Subscribe to our Newsletter</h2>
                      <form ref={form} onSubmit={sendEmail} className="input-group" value={user?.fname}>
                        <input name="name" type="hidden" />
                        <input type="email" name="email" className="form-control" defaultValue={user?.email} />
                        <span className="input-group-btn">
                          <button className="btn btn-theme" type="submit">Subscribe</button>
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
      }

      <div className="what-we-do text-center">
        <div className="box-heading py-1 mb-2">
          <p className='my-0'>What we do</p>
        </div>
        <h1 className="display-4">
          Quality Care With Modern Facilities
        </h1>
        <div className="all-cards-section">
          <div className=" flex-wrap d-flex justify-content-center">
            <Card imgSrc={what1} link='/bookappointment' head="Teleconsultation" text="This service allows you to connect with experienced doctors online, for medical advice and consultations." />
            <Card imgSrc={what2} link='/buymedicine' head="Online Pharmacy" text="This service provides a convenient way for you to purchase prescription and medicines, delivered directly to your doorstep." />
            <Card imgSrc={what3} link='/nearhealthcare' head=" Find Nearby doctors" text="This service enables you to locate trusted healthcare providers near your location, making it easier for you to access medical care when you need it." />
            <Card imgSrc={what4} link='/' head="Newsletter" text="This service keeps you updated with the latest medical news and tips, helping you stay informed and make right decisions about your health." />
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5 mt-4 home-contact">
        <div className="row">
          <div className="col-1"></div>
          <div className="left-content col-7">
            <h1 className='p-0 m-0'>A Great Place Of Medical Hospital Center & Health Care</h1>
          </div>
          <div className="right-content col-3 d-flex align-items-center justify-content-center">
            <div className=" d-inline-block">
              <button className="btn btn-primary py-3 px-4 text-uppercase" onClick={() => { navigate('/contact') }} style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <div className="our-services text-center">
        <div className="box-heading py-1 mb-2">
          <p className='my-0'>Our Services</p>
        </div>
        <h1 className="display-4">
          Quality Care With Modern Facilities
        </h1>
        <div className="services-cards-section mt-5">
          <div className="flex-wrap d-flex justify-content-around" >
            <CircularCard imageSrc={services1} footerHeading='Orthopaedics' />
            <CircularCard imageSrc={services2} footerHeading='Dentistry' />
            <CircularCard imageSrc={services3} footerHeading='Pediatrician' />
            <CircularCard imageSrc={services4} footerHeading='Neurology' />
            <CircularCard imageSrc={services5} footerHeading='Dermatology' />
            <CircularCard imageSrc={services6} footerHeading='Cardiology' />
            <CircularCard imageSrc={services7} footerHeading='Urology' />
            <CircularCard imageSrc={services8} footerHeading='Ophthalmology' />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home