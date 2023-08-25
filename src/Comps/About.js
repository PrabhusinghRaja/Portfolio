import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() =>{
        AOS.init();
    },[])
  return (
    <div className='container-fluid d-flex flex-column justify-content-center m-0 align-items-center about' data-aos="fade-up" data-aos-duration="1000">
        <h2 className="p-3 fw-strong border-bottom border-light mb-3">About me</h2>
        <img src="" alt="" />
        <p>I'm <strong>Prabhusingh Raja</strong>,  a passionate web developer with expertise in HTML, CSS, Bootstrap, Javascript and ReactJS.</p>
        <p>I completed my BE from Kings Engineering College in 2022.</p>
        <p>I've completed a Front-End Course at <a className="besant" href="https://www.besanttechnologies.com/" target="blank">Besant Technologies</a></p>
    </div>
  )
}

export default About;