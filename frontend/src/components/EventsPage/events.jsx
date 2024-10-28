import Content from "./content.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../App.jsx";

function Events(){
  const [events, setEvents] = useState([]);
  async function fetchEventsData(){
    const response = await axios.get(`${API_URL}/api/events`);
    setEvents(response.data.data);
  }
  useEffect(()=>{
      fetchEventsData();        
  },[])
  return (
    <div className='flex justify-center items-end w-full z-10 text-white absolute sm:bottom-0 sm:top-auto top-36 h-full overflow-y-scroll'>
      <div className="h-screen w-5/6 rounded-lg font-sans font-extralight from-neutral-400">
        {
          events.map((val, index)=>{
            return <Content key={index} poster ={val.poster} eventTitle = {val.eventTitle} aboutEvent = {val.aboutEvent} eventDate = {val.eventDate}/>
          })
        }
      </div>
    </div>
  )
}

export default Events;