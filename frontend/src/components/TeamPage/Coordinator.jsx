import { useState } from "react"
import Teachers from "./teachers.jsx"
import axios from "axios"
import { useEffect } from "react";

function Coordinator(){
    const [data, setData] = useState([]);
    async function fetchData(){
      const response = await axios.get("/api/coordinators");
      setData(response.data.data);
    }
    useEffect(()=>{
      fetchData()
    }, []);
    return (
      <div className="rounded-lg bg-neutral-950 sm:p-5 p-3 font-sans font-extralight from-neutral-400">
        <div className="">
            <p className="mb-2 font-semibold text-2xl">Meet our team</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorum molestiae voluptates atque necessitatibus placeat laudantium? 
              Illo porro suscipit accusantium velit enim natus voluptas fugiat! Non, rerum! Ea, soluta impedit?
              Illo porro suscipit accusantium velit enim natus voluptas fugiat! Non, rerum! Ea, soluta impedit?
            </p>
        </div>
        <div className="border-2 my-5 rounded-full border-blue-400"></div>
        {
          data.map((value)=>{
          return <Teachers pfp={value.pfp} teacherName={value.teacherName} about={value.about} position={value.position}/>
          })
        }
      </div>
    )
}

export default Coordinator;