import { useEffect } from "react";
import Member from "./Member.jsx"
import Session from "./Session.jsx";
import Coordinator from "./Coordinator.jsx";

const members = [
  {
    pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
    memberName: "Arjun Verma",
    branch: "Information Technology",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quisquam ratione! Nostrum voluptatum enim provident quaerat totam, voluptate ipsum non exercitationem minima harum velit omnis repudiandae consectetur ducimus nesciunt quis?"
  },
  {
    pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
    memberName: "Arjun Verma",
    branch: "Information Technology",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quisquam ratione! Nostrum voluptatum enim provident quaerat totam, voluptate ipsum non exercitationem minima harum velit omnis repudiandae consectetur ducimus nesciunt quis?"
  },
  {
    pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
    memberName: "Arjun Verma",
    branch: "Information Technology",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quisquam ratione! Nostrum voluptatum enim provident quaerat totam, voluptate ipsum non exercitationem minima harum velit omnis repudiandae consectetur ducimus nesciunt quis?"
  }
]

function Team(){
  return (
    <div className='flex justify-center items-end w-full z-10 text-white absolute bottom-0 h-4/5 sm:top-auto overflow-y-scroll'>
      <div className="h-full w-5/6 rounded-lg font-sans font-extralight from-neutral-400">
        <Coordinator/>
        <Session/>
        {
          members.map((e)=>{
            return <Member memberName = {e.memberName} branch = {e.branch} about = {e.about} pfp={e.pfp}/>
          })
        }
      </div>
    </div>
  )
}

export default Team;