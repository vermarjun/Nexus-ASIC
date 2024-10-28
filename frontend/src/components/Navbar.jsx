import React, { useState } from "react"
import {motion} from "framer-motion"
import instaSvg from "/instaIcon.svg"
import fbIcon from "/fbIcon.png"
import linkedinIcon from "/LinkedIcon.png"
import handShakeLogo from "/handShakeLogo.webp"
import ggvLogo from "/ggvLogo.webp"

function Navbar({setTab, currentTab}){
    const [hoverEvent, Event] = useState(false);
    const [hoverTeam, Team] = useState(false);
    const [hoverContact, Contact] = useState(false);
    const [hoverAbout, About] = useState(false);
    function HomeTab(){
        setTab("home");
    }
    function EventsTab(){
        setTab("events");
    }
    function TeamTab(){
        setTab("team");
    }
    function ContactTab(){
        setTab("contact");
    }
    function AboutTab(){
        setTab("about");
    }
    return (
        <>
        <div className={`z-50 sm:p-0 p-2 top-0 ${currentTab=="about"?"absolute":"absolute"} w-full sm:h-1/6 sm:flex place-content-around`}>
            <div className='sm:w-1/6 w-full space-x-5 sm:space-x-0 sm:mb-0 mb-4 flex justify-center' >
                <button>
                    <img src={ggvLogo} alt="" className='h-16 sm:m-5 m-1'/>          
                </button>
                <button onClick={HomeTab}>
                    <img src={handShakeLogo} alt="" className='h-16 sm:m-5 m-1'/>
                </button>
            </div>
            <div className={`flex sm:w-4/6 w-full justify-center items-center sm:space-x-14 space-x-6 font-sans sm:font-semibold sm:text-xl text-lg`}>
                <motion.button onClick={EventsTab} onHoverStart={()=>Event(true)} onHoverEnd={()=>Event(false) } className={`${(currentTab == "events")?"text-blue-400":"text-white"}`}>
                    <p className="">Events</p>
                    <div className={`border-t-4 border-blue-400 rounded-full ${hoverEvent?"w-full":"w-0"} transition-all ease-in-out duration-200`}></div>
                </motion.button>  
                <motion.button onClick={TeamTab} onHoverStart={()=>Team(true)} onHoverEnd={()=>Team(false)} className={`${(currentTab == "team")?"text-blue-400":"text-white"}`}>
                    <p className="">Team</p>
                    <div className={`border-t-4 border-blue-400 rounded-full ${hoverTeam?"w-full":"w-0"} transition-all ease-in-out duration-200`}></div>
                </motion.button>
                <motion.button onClick={ContactTab} onHoverStart={()=>Contact(true)} onHoverEnd={()=>Contact(false)} className={`${(currentTab == "contact")?"text-blue-400":"text-white"}`}>
                    <p className="">Contact</p> 
                    <div className={`border-t-4 border-blue-400 rounded-full ${hoverContact?"w-full":"w-0"} transition-all ease-in-out duration-200`}></div>
                </motion.button>
                <motion.button onClick={AboutTab} onHoverStart={()=>About(true)} onHoverEnd={()=>About(false)} className={`${(currentTab == "about")?"text-blue-400":"text-white"}`}>
                    <p className="">About</p>
                    <div className={`border-t-4  border-blue-400 rounded-full ${hoverAbout?"w-full":"w-0"} transition-all ease-in-out duration-200`}></div>
                </motion.button>
            </div>
            <div className="hidden sm:flex w-1/6  space-x-4 items-center ">
                <a href='https://www.instagram.com/nexus.asic/' target='_blank'>
                    <img src={instaSvg} className='h-7' alt="" />
                </a>
                <a href='https://www.facebook.com/NEXUS.GGV' target='_blank'>
                    <img src={fbIcon} className='h-7' alt="" />
                </a>
                <a href='https://www.linkedin.com/company/nexus-asic' target='_blank'>
                    <img src={linkedinIcon} className='h-7 ' alt="" />
                </a>
            </div>
        </div>
        <div className={`z-50 sm:w-1/6 absolute bottom-14 justify-center h-28 w-full space-x-4 items-center sm:hidden ${(currentTab=="home")?"flex":"hidden"}`}>
            <a href='https://www.instagram.com/nexus.asic/' target='_blank'>
                <img src={instaSvg} className='sm:h-7 h-10' alt="" />
            </a>
            <a href='https://www.facebook.com/NEXUS.GGV' target='_blank'>
                <img src={fbIcon} className='sm:h-7 h-10' alt="" />
            </a>
            <a href='https://www.linkedin.com/company/nexus-asic' target='_blank'>
                <img src={linkedinIcon} className='sm:h-7 h-10' alt="" />
            </a>
        </div>
        </>
    )
}

export default Navbar;