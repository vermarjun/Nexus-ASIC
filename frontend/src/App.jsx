import { useState } from 'react'
import Background from "./components/Background.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./components/HomePage/homepage.jsx"
import Events from "./components/EventsPage/events.jsx"
import Team from "./components/TeamPage/team.jsx"
import Contact from "./components/ContactPage/contact.jsx"
import About from "./components/AboutPage/about.jsx"
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  const [currentTab, setTab] = useState("home");
  // console.log(currentTab);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className='bg-black' >
        <div data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-duration="600" className='w-screen h-screen'>
          <Background currentTab={currentTab}/>
          <Navbar setTab={setTab} currentTab={currentTab}/>
          {(currentTab=="home")?<Home/>:""}
          {(currentTab=="events")?<Events/>:""}
          {(currentTab=="team")?<Team/>:""}
          {(currentTab=="contact")?<Contact/>:""}
          {(currentTab=="about")?<About/>:""}
        </div>
      </div>
    </>
  )
}

export default App;