import mini1 from '../assets/Mini1_Project_Manbase.png'
import mini2 from '../assets/Mini2_Project_Nutrichef.png'
import capstone from '../assets/Capstone_Project_CarGo.png'
import musicPlayer from '../assets/music-player.png'
import ticTacToe from '../assets/tictactoe.png'



export const MyWorks = () => {
  return (
    <div>
      <div>
        <div className="bg-body ">
          <div className="z-50 mx-80">  

            {/* About Hero Banner */}
            <div className="flex flex-col justify-center pb-24 h-screen ">
              <div className="flex items-end">
                <div>
                  <h1 data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" className="text-titles text-8xl font-bold ">
                  Know more about my   
                  </h1>
                  <h1 data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" className="text-titles text-8xl font-bold ">
                  <span className="text-texts">projects</span> and <span className="text-texts">skills.</span>      
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <div>
                {/* Title */}
                <h1 data-aos="fade-right" data-aos-duration="700" data-aos-delay="400" className="text-titles text-8xl font-bold pb-16">
                  Projects
                </h1>

                {/* Cards Line 1 */}
                <div className="flex justify-stretch">
                  {/* Manbase Solutions */}
                  <div className="max-w-sm relative">
                      <a href="https://manbasesolutions-byte64mini1.netlify.app/index.html" target="_blank">
                          <img className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={mini1} alt=""/>
                      </a>
                      <div className="py-5">
                          <a href="#">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-titles">Manbase Solutions</h5>
                          </a>
                          <p className="mb-3 font-normal text-texts">A Human Resource Information System provider that caters to micro small and medium companies in the Philippines. Created for our Mini Project 1 to showcase our HTML, CSS, and Bootstrap skills.</p>
                      </div>
                  </div>
                  
                  {/* NutriChef */}
                  <div className="max-w-sm px-4">
                      <a href="https://nutrichefmend2.netlify.app/" target="_blank">
                          <img className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={mini2} alt="" />
                      </a>
                      <div className="p-5">
                          <a href="https://nutrichefmend2.netlify.app/" target="_blank">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-titles">NutriChef Hub</h5>
                          </a>
                          <p className="mb-3 font-normal text-texts">This health-centered food platform is promotes healthy eating and gives access to recipes that are easy to prepare for cooking convenience. This is our Mini Project 2 to show our API fetching skills using Javascript. </p>
                      </div>
                  </div>

                  {/* CarGo */}
                  <div className="max-w-sm">
                      <a href="https://capstone-cargo.vercel.app/" target="_blank">
                          <img className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={capstone} alt="" />
                      </a>
                      <div className="p-5">
                          <a href="https://capstone-cargo.vercel.app/" target="_blank">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-titles">CarGo Car Rentals</h5>
                          </a>
                          <p className="mb-3 font-normal text-texts">Introducing a car rental platform to cater any type of vehicle needs like personal, family, business, and events purposes. Won as the Best Capstone where our Front-End and Back-End skills are showcased </p>
                      </div>
                  </div>
                </div>

                {/* Cards Line 2 */}
                <div className="flex justify-evenly pt-8">

                  {/* Music Player */}
                  <div className="max-w-sm">
                      <a href="dreiloreto-musicplayer-api.netlify.app" target="_blank">
                          <img className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={musicPlayer} alt="" />
                      </a>
                      <div className="p-5">
                          <a href="dreiloreto-musicplayer-api.netlify.app" target="_blank">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-titles">Music Player</h5>
                          </a>
                          <p className="mb-3 font-normal text-texts">A music player project where you can listen to music and sing along with the lyrics, know more about the artist's albums, and see related artists with the help of API fetching with Tailwind CSS for UI.</p>
                      </div>
                  </div>
                  
                  {/* Tic-Tac-Toe */}
                  <div className="max-w-sm">
                      <a href="https://dreiloreto-tictactoe.netlify.app/" target="_blank">
                          <img className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={ticTacToe} alt="" />
                      </a>
                      <div className="p-5">
                          <a href="https://dreiloreto-tictactoe.netlify.app/" target="_blank">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-titles">Tic-Tac-Toe</h5>
                          </a>
                          <p className="mb-3 font-normal text-texts">A traditional Noughts and Crosses game built using React.js and Tailwind CSS where two players can play.</p>
                      </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
