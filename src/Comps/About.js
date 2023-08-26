import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() =>{
        AOS.init();
    },[])
  return (
    <div id="about" className='container-fluid d-flex flex-column justify-content-center m-0 align-items-center about' data-aos="fade-up" data-aos-duration="1000">
        <h2 className="p-3 fw-strong border-bottom border-light mb-3">About me</h2>
        <p>I'm <strong>Prabhusingh Raja</strong>,  a passionate web developer with expertise in HTML, CSS, Bootstrap, Javascript and ReactJS.</p>
        <p>I completed my B.E from Kings Engineering College in 2022.</p>
        <p>I've completed a Front-End Course at <a className="besant" href="https://www.besanttechnologies.com/" target="blank" rel="noreferrer">Besant Technologies</a></p>
        <a href="https://drive.google.com/file/d/1Jt-o-f0Uvm74HVhhp69UGYpx-BoO9wqo/view?usp=drive_link" target='_blank' rel="noreferrer">
        <button className='btn btn-secondary mb-3'>Download Resume</button>
        </a>
    </div>
  )
}

export default About;