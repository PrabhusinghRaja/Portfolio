import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() =>{
        AOS.init();
    },[])
    return (
        <div id="home" data-aos="zoom-in" data-aos-duration="2000" className="lapimage d-flex flex-column justify-content-center align-items-center">
            <p className="web p-2" data-aos="fade-right" data-aos-duration="2000">Web Developer</p>

            <p className="quote p-2" data-aos="fade-left" data-aos-duration="2000">
                There is always one more bug to fix. <span className="">-Ellen Ullman</span>
            </p>
            <a href="mailto:rajaprabhusingh@gmail.com" className="btn btn-danger" >Hire me</a>
        </div>
    );
};

export default Home;
