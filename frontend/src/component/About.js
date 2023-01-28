import React from 'react'
import chat from '../images/chat.png';
import tracking from '../images/tracking.png';
import find from '../images/find.png';
import healthInsurannce from '../images/healthcare.png';
import mission from '../images/healthcare.png'
import Features_card from './Features_card';
const About = () => {
  return (
    <>
      <div className='About-us container mt-5'>
        <div className='mission'>
          <h2>Our Mission</h2>
          Our proposed solution is to improve access to healthcare for remote and underserved areas
          includes the use of telemedicine for virtual consultations, wearable technology for tracking
          and monitoring health data, and a patient portal with features such as remote monitoring,
          appointment scheduling, secure email communication, and health insurance information. </div>

        <div className='future-div my-5'>
          <h2>Future Scope</h2>
          <Features_card img={chat} heading='Integration with other technologies' desc='The project could explore the integration of artificial intelligence and machine learning to analyze patient data and provide personalized treatment recommendations.' />
          <Features_card img={healthInsurannce} heading='Telehealth' desc='The project could explore the integration of artificial intelligence and machine learning to analyze patient data and provide personalized treatment recommendations.' />
          <Features_card img={tracking} heading='Research and Development' desc='Continual research and development on the technology to improve its accuracy and efficiency, and also to explore new areas of application.' />
        </div>
      </div>


    </>
  )

}

export default About