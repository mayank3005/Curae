import React from 'react'
import { HashLoader } from 'react-spinners'

const LoadingSection = () => {
  return (
    <>
      <div className="loading-section d-flex justify-content-center align-items-center" style={{ 'height': '90vh' }}>
        <HashLoader
          color="#b8d6ff"
          size={100}
        />
      </div>
    </>
  )
}

export default LoadingSection