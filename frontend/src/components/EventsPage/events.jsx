import Content from "./content.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../App.jsx";
import Loading from "./loading.jsx";

function Events(){
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchEventsData(){
    setLoading(true);
    const response = await axios.get(`${API_URL}/api/events`);
    setLoading(false);
    setEvents(response.data.data);
  }
  useEffect(()=>{
      fetchEventsData();        
  },[])
  return (
    <div className='flex justify-center items-end w-full z-10 text-white absolute sm:bottom-0 sm:top-auto top-36 h-full overflow-y-scroll'>
      <div className="h-screen w-5/6 rounded-lg font-sans font-extralight  from-neutral-400">
        {loading?<Loading/>:<div className="hidden"></div>}
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