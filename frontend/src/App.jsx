import { useState } from 'react'
import Background from "./components/Background.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./components/HomePage/homepage.jsx"
import Events from "./components/EventsPage/events.jsx"
import Team from "./components/TeamPage/team.jsx"
import Contact from "./components/ContactPage/contact.jsx"
import About from "./components/AboutPage/about.jsx"

function App() {
  const [currentTab, setTab] = useState("home");
  console.log(currentTab);
  return (
    <>
      <div className='bg-black'>
      <Background currentTab={currentTab}/>
      <Navbar setTab={setTab} currentTab={currentTab}/>
      {(currentTab=="home")?<Home/>:""}
      {(currentTab=="events")?<Events/>:""}
      {(currentTab=="team")?<Team/>:""}
      {(currentTab=="contact")?<Contact/>:""}
      {(currentTab=="about")?<About/>:""}
      </div>
    </>
  )
}

export default App;