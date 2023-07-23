import React, {useState} from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Link } from 'react-router-dom';

export const Contact = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const email = "loretomeldred@gmail.com";
  const whatsapp = "+639608211385";
  const skype = "live:.cid.be0ad94e2a9c264c";
  const linkedin = "www.linkedin.com/in/dreiloreto2911/";

  const handleHover = (element) => {
  setHoveredElement(element);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    navigator.clipboard.writeText(skype);
    navigator.clipboard.writeText(linkedin);
    alert("Copied to clipboard!");

  };


  return (
    <div>
      <div className="">
        <div className="bg-body ">
          <div className="z-50 mx-80">  

            <div className="flex flex-col justify-center pb-[30px] pt-72">
              <div className="flex items-end">
                <div>
                  <h1 data-aos="zoom-in-down" data-aos-duration="700" data-aos-delay="400" className="text-titles text-8xl font-bold ">
                    LET'S TEAM UP!
                  </h1>
                  <h3 data-aos="zoom-in-down" data-aos-duration="700" data-aos-delay="600" className="text-texts text-4xl">
                    Let's craft captivating digital experiences together
                  </h3>
                </div>
              </div>
            </div>
            <svg class="animate-bounce w-6 h-6 text-titles"></svg>
            
            {/* Content */}
            <div>
              <div>
                <p data-aos="zoom-out" data-aos-duration="700" data-aos-delay="800" className="text-texts text-2xl pr-10 pb-10">
                  I have a dream of pursuing my career as a web developer. So I am actively seeking new opportunities  to leverage my skills. I am confident in my ability to bring value to any project or organization. If you are interested in learning more about me and how I can contribute to your team, please feel free to contact me through the information provided below (which are also provided in my <a className="text-titles" target="_blank" href="https://drive.google.com/file/d/1Ib1Qq8mMTi5zKtk7D6jWd1QhKp8mTsf2/view?usp=sharing">resume</a>). I look forward to discussing potential collaborations and showcasing my skills further.   
                </p>
                
                {/* Contact Options */}

                {/* Gmail */}
                <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="1000">
                  <span
                    className='flex transition-all duration-500 transform w-[300px] hover:translate-x-8 cursor-pointer text-titles text-3xl pb-[25px] font-bold label-email copy-email'
                    onMouseEnter={() => handleHover('email')} onMouseLeave={() => handleHover(null)} onClick={handleCopy}>

                    {hoveredElement === 'email' ? 'Copy to clip board' : 'Gmail' }
                  </span>
                </p>

                {/* WhatsApp */}
                <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="1200">
                  <span
                    className='flex transition-all duration-500 transform w-[300px] hover:translate-x-8 cursor-pointer text-titles text-3xl pb-[25px] font-bold label-email copy-email'
                    onMouseEnter={() => handleHover('whatsapp')} onMouseLeave={() => handleHover(null)} onClick={handleCopy}>

                    {hoveredElement === 'whatsapp' ? 'Copy to clip board' : 'WhatsApp' }
                  </span>
                </p>

                {/* Skype */}
                <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="1400">
                  <span
                    className='flex transition-all duration-500 transform w-[300px] hover:translate-x-8 cursor-pointer text-titles text-3xl pb-[25px] font-bold'
                    onMouseEnter={() => handleHover('skype')} onMouseLeave={() => handleHover(null)} onClick={handleCopy}>

                    {hoveredElement === 'skype' ? 'Copy to clip board' : 'Skype' }
                  </span>
                </p>

                {/* LinkedIn */}
                <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="1600">
                  <span
                    className='flex transition-all duration-500 transform w-[300px] hover:translate-x-8 cursor-pointer text-titles text-3xl pb-[201px] font-bold'
                    onMouseEnter={() => handleHover('linkedin')} onMouseLeave={() => handleHover(null)} onClick={handleCopy}>

                    {hoveredElement === 'linkedin' ? 'Copy to clip board' : 'LinkedIn' }
                  </span>
                </p>







              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
