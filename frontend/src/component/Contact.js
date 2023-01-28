import React from 'react'
import ChatBot from 'react-simple-chatbot';
import basicSteps from '../constants/basicSteps';
import MyMap from './MyMap';

const Contact = () => {
  return (
    <>
      <div className="body-contact container-fluid d-flex flex-row justify-content-around">
        <div className="left-side pe-5 mt-4">
          <h1 className='text-center text-capitalize heading pb-3'>Find your healthcare near you 🚑</h1>
          <MyMap />
        </div>
        <div className="right-side d-flex flex-column justify-content-end">
          <ChatBot steps={basicSteps} />
        </div>
      </div>
    </>
  )
}

export default Contact