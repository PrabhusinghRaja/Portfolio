import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() =>{
        AOS.init();
    },[])
  return (
    <div className='mt-2'>
        <h3 className='text-light abt text-center p-3' data-aos="flip-up">About</h3>
        <div className='aboutimage'  data-aos="zoom-in" data-aos-duration="1500">
          <p>
              
          </p>
            
        </div>
        
    </div>
  )
}

export default About;