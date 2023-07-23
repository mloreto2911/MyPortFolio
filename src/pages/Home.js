import React, {useState} from 'react';
import bgphoto from '../assets/home-bg.jpg'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export const Home = () => {
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleHover = (element) => {
  setHoveredElement(element);
};

    return (
        // Hover Effect 
        <div className="pt-36">
            <div className="w-screen relative -z-50 ">
                    <img className="fixed inset-0 object-cover object-top w-full h-full" data-aos="fade-up" data-aos-duration="700" src={bgphoto}/></div>
            <div>
                <div className='container'>
                    <div className="z-50 text-white text-8xl font-bold">
                        {/* <h2>home</h2> */}
                        <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="400">
                          <Link to='/about'>
                          <span
                            className='flex transition-all duration-500 transform w-[700px] hover:translate-x-8 cursor-pointer hover:text-titles pb-5 pl-28'
                            onMouseEnter={() => handleHover('about')} onMouseLeave={() => handleHover(null)} 
                          >
                            {hoveredElement === 'about' ? 'ABOUT' : 'Hi!' }
                          </span>
                          </Link>
                        </p>
                        <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="600">
                          <Link to='/myworks'>
                          <span
                            className='flex transition-all duration-500 transform w-[700px] hover:translate-x-8 cursor-pointer hover:text-titles pb-5 pl-28'
                            onMouseEnter={() => handleHover('works')} onMouseLeave={() => handleHover(null)}
                          >
                            {hoveredElement === 'works' ?  'PROJECTS' : "I'm"}
                          </span>
                          </Link>
                        </p>

                        <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="800">
                          <Link to='/contact'>
                          <span
                            className='flex transition-all duration-500 transform w-[700px] hover:translate-x-8 cursor-pointer hover:text-titles pl-28'
                            onMouseEnter={() => handleHover('contact')} onMouseLeave={() => handleHover(null)}
                          >
                            {hoveredElement === 'contact' ? 'CONTACT' : 'Drei' }
                          </span>
                          </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>

       
    );
};