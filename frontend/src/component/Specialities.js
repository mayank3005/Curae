import React from 'react'
import Card from './Card'
import chat from '../images/chat.png';
import tracking from '../images/tracking.png';
import find from '../images/find.png';
import healthInsurannce from '../images/healthcare.png';
import securityIcon from '../images/security-icon.png';
export default function Specialities() {
  return (
    <>
      <br />
      <br />
      <h1 className='display-5 fw-medium specialities-heading mb-5'>Our Specialities </h1>
      {/* <h1>Why you should trust us? </h1> */}
      {/* <h1>Get know about us</h1> */}
      <div className='Specialities'>
        <div class="container">
          <div class="row">
            <Card heading="Find Ur Doc" img={find} desc="Get contact of your nearby doctor within seconds." />
            {/* <Card heading="All Specialities" desc="You can reach out to 3500+ doctors from 80+ specialties,who are experienced in telemedicine."/>
         <Card heading="Private & Secure" desc="All your data is protected and safegaurded with secure SSL. data at rest encryption."/> */}
            <Card heading="Track & Monitor" img={tracking} desc="It allows patients and healthcare professional to keep tarck of health status, and respond quickly to any changes in condition." />
            <Card heading="Health Insurance" img={healthInsurannce} desc="It provides the reimbursement of your bills or pays the medical care directly on your behalf" />
            <Card heading="Chatbot Support" img={chat} desc="Get access to Doctor via chat bots for a fantastic telehealth service." />
          </div> </div>
      </div>
    </>
  )
}
