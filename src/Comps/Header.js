import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid mx-md-4 p-3 p-lg-0">
                <Link to='' className="navbar-brand text-light fw-bold">Developer</Link>
                <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item p-lg-2">
                            <Link to='/home' className="nav-link px-4 text-light" aria-current="page" ><i className="bi bi-house-fill px-1"></i>Home</Link>
                        </li>
                        <li className="nav-item p-lg-2">
                            <Link to='' className="nav-link px-4 text-light" ><i className="bi bi-info-circle-fill px-1"></i>About</Link>
                        </li>
                        <li className="nav-item p-lg-2">
                            <Link to='' className="nav-link px-4 text-light" ><i className="bi bi-folder-fill px-1"></i>Portfolio</Link>
                        </li>
                        <li className="nav-item p-lg-2">
                            <Link to='' className="nav-link px-4 text-light" ><i className="bi bi-telephone-fill px-1"></i>Contact</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header