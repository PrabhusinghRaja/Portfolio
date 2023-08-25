import React from 'react'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()
  
  return (
    <div className='container-fluid pt-2 d-flex flex-column justify-content-center align-items-center footer'>
      <p className='text-light pt-1'><small>&#169;{year} India, All rights reserved.</small></p>
    </div>
  )
}

export default Footer