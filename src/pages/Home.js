import React, {useState} from 'react';
import bgphoto from '../assets/home-bg.jpg'

export const Home = () => {
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleHover = (element) => {
  setHoveredElement(element);
};

    return (
        // Hover Effect 
        <div>
            <div className="w-screen relative -z-50">
                    <img className="fixed inset-0 object-cover object-top w-full h-full" src={bgphoto}/></div>
            <div>
                <div className='container'>
                    <div className="z-50 text-white text-7xl font-bold ">
                        {/* <h2>home</h2> */}
                        <p>
  <span
    className='flex transition-all duration-500 transform hover:translate-x-8 cursor-pointer hover:text-titles pb-5 pl-28'
    onMouseEnter={() => handleHover('about')} onMouseLeave={() => handleHover(null)} 
  >
    {hoveredElement === 'about' ? 'About Me' : 'Hi!' }
  </span>
</p>
<p>
  <span
    className='flex transition-all duration-500 transform hover:translate-x-8 cursor-pointer hover:text-titles pb-5 pl-28'
    onMouseEnter={() => handleHover('works')} onMouseLeave={() => handleHover(null)}
  >
    {hoveredElement === 'works' ?  'My Works' : "I'm"}
  </span>
</p>
<p>
  <span
    className='flex transition-all duration-500 transform hover:translate-x-8 cursor-pointer hover:text-titles pl-28'
    onMouseEnter={() => handleHover('contact')} onMouseLeave={() => handleHover(null)}
  >
    {hoveredElement === 'contact' ? 'Contact Me' : 'Drei' }
  </span>
</p>

                    </div>
                </div>
            </div>
        </div>

       
    );
};