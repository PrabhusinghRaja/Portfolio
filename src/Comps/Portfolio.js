import React from 'react'

const Portfolio = () => {
  return (
    <div id='portfolio' className='container-fluid d-flex flex-column justify-content-start align-items-center portfolio' data-aos="fade-down" data-aos-duration="1000">
        <h2 className="p-3 fw-strong border-bottom border-light mb-3">Portfolio</h2>
        <img src="" alt="" />
        <p><a className='git fs-5' href="https://github.com/prabhusinghraja" target='_blank' rel="noreferrer">GitHub Profile</a></p>
        <h3 className=''>Projects</h3 >
        <ul className='ul'>
            <li><a target='_blank' rel="noreferrer" href="https://prabhusinghraja.github.io/crud/">Crud</a></li>
            <li><a target='_blank' rel="noreferrer" href="https://prabhusinghraja.github.io/todo-list/">To-do List</a></li>
            <li><a target='_blank' rel="noreferrer" href="https://prabhusinghraja.github.io/routerpractice/">Router Practice</a></li>
            <li>Other Projects are uploaded in my Github Profile</li>
        </ul>
        
        </div>
  )
}

export default Portfolio