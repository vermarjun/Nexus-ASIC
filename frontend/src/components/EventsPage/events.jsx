import Content from "./content.jsx";
import events from "/events.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

function Events(){
  const [events, setEvents] = useState([]);
  async function fetchEventsData(){
    const response = await axios.get("/api/events");
    setEvents(response.data.data);
  }
  useEffect(()=>{
      fetchEventsData();        
  },[])
  return (
    <div className='flex justify-center items-end w-full z-10 text-white absolute sm:bottom-0 sm:h-5/6 sm:top-auto top-36 h-screen overflow-y-scroll'>
      <div className="h-full w-5/6 rounded-lg font-sans font-extralight from-neutral-400">
        {
          events.map((val)=>{
            return <Content poster ={val.poster} eventTitle = {val.eventTitle} aboutEvent = {val.aboutEvent} eventDate = {val.eventDate}/>
          })
        }
      </div>
    </div>
  )
}

export default Events;