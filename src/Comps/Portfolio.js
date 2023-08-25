import React from 'react'

const Portfolio = () => {
  return (
    <div className='container-fluid d-flex flex-column justify-content-start align-items-center portfolio' data-aos="fade-down" data-aos-duration="1000">
        <h2 className="p-3 fw-strong border-bottom border-light mb-3">Portfolio</h2>
        <img src="" alt="" />
        <p><a className='git' href="https://github.com/prabhusinghraja" target='_blank'>GitHub Profile</a></p>
        <h4 className=''>Projects</h4 >
        <ul className='ul'>
            <li><a target='_blank' href="https://prabhusinghraja.github.io/crud/">Crud</a></li>
            <li><a href="">To-do List</a></li>
            <li><a href="">Router Practice</a></li>
            <li>Other Projects are uploaded in my Github Profile</li>
        </ul>
        <a href="https://drive.google.com/file/d/1Jt-o-f0Uvm74HVhhp69UGYpx-BoO9wqo/view?usp=drive_link" target='_blank'>
        <button className='btn btn-secondary m-2'>Download Resume</button>
        </a>
        </div>
  )
}

export default Portfolio