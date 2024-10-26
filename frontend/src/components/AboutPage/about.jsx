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
      <div style={{backgroundImage: `url(${aboutBg})`}}  className={`text-white h-screen w-full bg-cover bg-fixed`}>
        <div className="h-5/6 absolute bottom-0 w-full">
            <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="font-bold text-6xl border-l-4 mt-10">Nexus 6.0</p>
          <div>
            <p className="text-left font-extralight text-xl mt-5 ml-1">Student Alumni Interaction Cell</p>
          </div>
          <div className="mt-5 p-1">
            <img className="sm:h-72 rounded-lg" src={aboutPageTeam} alt="" />
          </div>
          <div>
            <p className="text-left font-extralight mt-5 ml-1">Nexus is an official student body of SOSET(IT GGV), dedicated to establish an active relationship between its alumni and the school of engineering by creating a strong student-alumni network and organising the annual official alumni meet</p>
          </div>
        </div>
      </div>
      <div style={{backgroundImage: `url(${aboutBg})`}}  className={`h-screen text-white w-full bg-fixed bg-cover`}>
        <div className="h-5/6 w-full ">
            <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="font-bold text-4xl mt-10">OUR TEACHER COORDINATORS</p>
          <div className="mt-5 p-2 ">
            <img className="rounded-lg" src={teacherCoordAmitJain} alt="" />
          </div>
          <div className="mt-5 sm:mt-0 p-2 ">
            <img className="rounded-lg" src={teacherCoordKapil} alt="" />
          </div>
            <p data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="150" className="font-bold text-4xl mt-5 sm:mt-0">Here In Nexus We: </p>
          <div className="mt-5 p-2 sm:mt-0">
            <img className="rounded-lg" src={aboutPage_desc} alt="" />
          </div>
          <div className="mt-2 p-2 sm:mt-0">
            <img className="rounded-lg" src={aboutPage_desc2} alt="" />
          </div>
        </div>
      </div>
      </>
    )
}

export default About;