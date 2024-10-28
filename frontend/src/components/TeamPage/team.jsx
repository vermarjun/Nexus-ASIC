import { useEffect } from "react";
import Member from "./Member.jsx"
import Coordinator from "./Coordinator.jsx";
import { useState } from "react";
import axios from "axios"
import { API_URL } from "../../App.jsx";

function Team(){
  const [fetchYear, setFetchYear] = useState(2024);
  const [members, setMembers] = useState([]);
  async function fetchMembersData(fetchYear){
    const response = await axios.get(`${API_URL}/api/members`,{
      params:{
        year: fetchYear
      }
    });
    setMembers(response.data.data);
  }
  // on mount
  useEffect(()=>{
    fetchMembersData(fetchYear);        
  },[])
  // when ever year changes in dropdown
  useEffect(()=>{
    fetchMembersData(fetchYear);        
  },[fetchYear])
  function handelSelect(event){
      setFetchYear(2025-event.target.value);
  }
  const dropDownOptions = [
    {label:"2024", value:1},
    {label:"2023", value:2},
    {label:"2022", value:3},
    {label:"2021", value:4},
    {label:"2020", value:5},
    {label:"2019", value:6},
    {label:"2018", value:7},
  ]
  return (
    <div className='flex justify-center items-end w-full z-10 text-white absolute bottom-0 h-4/5 sm:top-auto overflow-y-scroll'>
      <div className="h-full w-5/6 rounded-lg font-sans font-extralight from-neutral-400">
        <Coordinator/>
        {/* <Session/> */}
        <div className="h-16 rounded-3xl bg-neutral-950 my-5 flex justify-start items-center">
          <div className="w-2/3 text-blue-400 ml-3 sm:ml-4">
              <p className="text-xl sm:text-2xl font-medium">Nexus Members</p>
          </div>
          <div className="w-1/3 sm:space-x-8 flex justify-end">
            <select name="" id="" className="bg-blue-400 text-neutral-950 rounded-full mr-3 p-2" onChange={handelSelect}>
              {dropDownOptions.map((option, index)=>{
                return <option key={index} className="" value={option.value}>{option.label}</option>
              })}
            </select>
          </div>
        </div>
        {
          members.map((val, index)=>{
            return <Member key={index} pfp = {val.pfp} branch = {val.branch} about = {val.about} memberName = {val.memberName}/>
          })
        }
      </div>
    </div>
  )
}

export default Team;