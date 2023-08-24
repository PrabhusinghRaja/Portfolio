import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() =>{
        AOS.init();
    },[])
    return (
        <div data-aos="zoom-in" className="lapimage d-flex flex-column justify-content-center align-items-center">
            <p className="web p-2" data-aos="fade-right">Web Developer</p>

            <p className="quote p-2" data-aos="fade-left">
                There is always one more bug to fix. <span className="">-Ellen Ullman</span>
            </p>
            <form action="mailto:rajaprabhusingh@gmail.com" method="post">
            <button className="btn btn-danger">Hire me</button>
            </form>
        </div>
    );
};

export default Home;
