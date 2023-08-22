import aboutpic from '../assets/Port Folio Pic.png'

export const About = () => {
  return (
    <div>
      <div className="">
        <div className="bg-body ">
          <div className="z-50 mx-80">  

            {/* About Hero Banner */}
            <div className="flex flex-col items-center justify-center text-center pb-24 h-screen ">
              <div className="flex items-end">
                <div>
                  {/* <img className="w-[400px] h-[400px] pr-4" src={aboutpic}/> */}
                </div>
                <div>
                  <h1 data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" className="text-titles text-8xl font-bold ">
                    MELDRED "DREI" LORETO
                  </h1>
                  <h3 data-aos="fade-right" data-aos-duration="700" data-aos-delay="700" className="text-texts text-4xl">
                    Front-End Developer and Web Designer
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <div>
                <h1 data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" className="text-titles text-8xl font-bold pb-10">
                  About
                </h1>
                <p data-aos="zoom-out" data-aos-duration="700" data-aos-delay="400" className="text-texts text-2xl px-10 pb-10">
                  I’m only a simple person with simple dreams and goals in life. I just want to be  a part of something that will appreciate and help improve my value as a professional and as a person. But after years of searching, I am able to learn that <span className='text-titles'>my value is not defined by where I work and what I do, or what I have accomplished</span>; its all about how I truly value myself. So I maintained a mentality that as long as I know my worth, and who I really am, I will go along anywhere me just fine.  
                </p>

                <p data-aos="zoom-out" data-aos-duration="700" data-aos-delay="300" className="text-texts text-2xl px-10 pb-10">
                  Sense of <span className='text-titles'>responsibility</span> and <span className='text-titles'>accountability</span>, <span className='text-titles'>integrity</span>, and <span className='text-titles'>work-life balance</span> are the things I prioritize as a professional. I prefer a work place that gives reasonable room for mistakes since none of us are perfect at all. I appreciate constructive criticisms and I always make sure to learn from my challenges and opportunities for improvement. In return, I make sure that I apply my learning immediately, retain the corrections and so better on my task and show impressive improvements. I also do not hesitate to ask if I don’t know or understand anything. I don’t want to make a fool out of myself by pretending then fail at my work in the end. 
                </p>

                <p data-aos="zoom-out" data-aos-duration="700" data-aos-delay="500" className="text-texts text-2xl px-10 pb-10">
                  Although I am an <span className='text-titles'>INFP <a target="_blank" href="https://www.16personalities.com/infp-personality">(https://www.16personalities.com/infp-personality)</a></span>, which is known to be one of the introverted type of personalities, I still enjoy working with a team and collaborate ideas with other teammates. This is another venue of learning for me since each team members will have different sets of principles and ideas. I am not competitive and I celebrate the achievements of my colleagues heartily. I make sure that I maintain an accommodating and friendly vibe, but in a very professional way.  
                </p>

                <p data-aos="zoom-out" data-aos-duration="700" data-aos-delay="700" className="text-texts text-2xl px-10 pb-10">
                  This is me in a nut shell. If you find me interesting and you’d like to know more about my work background, just click on my updated resume to view it, or just download it if you want.
                </p>
                
                <p data-aos="zoom-out" data-aos-duration="700" data-aos-delay="900" className="text-titles text-2xl px-10 pb-32 font-bold"> 
                <a target="_blank" href="https://drive.google.com/file/d/1ByGgMwY7PjXAc3E6JR16B1F0y-QYv0YE/view?usp=sharing">Click to view/download my resume</a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
