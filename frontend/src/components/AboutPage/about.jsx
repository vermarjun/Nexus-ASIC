import aboutBg from "/aboutPage.jpg"
import aboutPageTeam from "/aboutPageTeam.jpg"
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import teacherCoordAmitJain from "/teacherCoordAmitJain.jpg"
import teacherCoordKapil from "/teacherCoordKapil.jpg"
import aboutPage_desc from "/aboutPage_desc.jpg"
import aboutPage_desc2 from "/aboutPage_desc2.jpg"

function About(){
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
      <>
      <div style={{backgroundImage: `url(${aboutBg})`}}  className={`text-white h-full w-full bg-cover bg-fixed flex justify-center items-center`}>
        <div className="h-5/6  absolute bottom-0 w-screen sm:w-5/6">
            <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="font-bold text-6xl border-l-4 sm:text-center sm:border-0 mt-10 sm:mt-0">Nexus 6.0</p>
          <div className="sm:flex justify-center items-center">
            <p className="text-left font-extralight text-xl mt-5 ml-1">Student Alumni Interaction Cell</p>
          </div>
          <div className="mt-5 p-1 sm:flex justify-center items-center space-x-2">
            <img className="rounded-lg sm:w-2/6" src={aboutPageTeam} alt="" />
            <img className="rounded-lg sm:w-2/6 hidden sm:block" src={aboutPageTeam} alt="" />
            <img className="rounded-lg sm:w-2/6 hidden sm:block" src={aboutPageTeam} alt="" />
          </div>
          <div className="sm:flex justify-center items-center">
            <p className="text-left font-extralight mt-5 p-2 w-full sm:text-center sm:text-xl sm:font-normal backdrop-blur-sm rounded-xl">Nexus is an official student body of SOSET(IT GGV), dedicated to establish an active relationship between its alumni and the school of engineering by creating a strong student-alumni network and organising the annual official alumni meet</p>
          </div>
        </div>
      </div>
      <div style={{backgroundImage: `url(${aboutBg})`}}  className={`h-screen text-white absolute w-full bg-cover flex justify-center items-center`}>
        <div className=" w-screen sm:w-5/6 h-full absolute top-0">
            <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="ml-3 sm:ml-0 font-bold text-4xl sm:text-center">OUR TEACHER COORDINATORS</p>
          <div className=" flex justify-center items-center">
            <div className="sm:flex sm:justify-center sm:items-center">
              <div data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="0" className="mt-5 p-2 ">
                <img className="rounded-lg" src={teacherCoordAmitJain} alt="" />
              </div>
              <div data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="0" className="mt-0 sm:mt-0 p-2">
                <img className="rounded-lg" src={teacherCoordKapil} alt="" />
              </div>
            </div>
          </div>
            <div className="flex justify-center items-center">
              <div >
                <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="ml-3 sm:ml-0 font-bold text-4xl mt-5 sm:w-full sm:text-center">Here In Nexus We: </p>
                <div className="sm:flex sm:justify-start sm:items-start sm:mt-10">
                  <div className="mt-2 p-2 sm:mt-0">
                    <img className="rounded-lg" src={aboutPage_desc} alt="" />
                  </div>
                  <div className="mt-2 p-2 sm:mt-0">
                    <img className="rounded-lg" src={aboutPage_desc2} alt="" />
                  </div>
                </div>
              </div>

            </div>
        </div>
      </div>
      </>
    )
}

export default About;