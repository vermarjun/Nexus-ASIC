import { useRef } from "react";
import axios from "axios";
import { useState } from "react";

function Contact(){
    const [done, setDone] = useState("none");
    const email = useRef();
    const username = useRef();
    const message = useRef();
    async function submitBtn(){ 
      if (email.current.value == "")email.current.focus();
      else if (username.current.value == "")username.current.focus();
      else if (message.current.value == "")message.current.focus();
      else {
        const response = await axios.post("/api/contact",{
          email:email.current.value,
          username:username.current.value,
          message:message.current.value
        })
        setDone(response.data.message)
      }
    }  
    return (
      <div className='flex justify-center items-center w-full z-10 text-white absolute top-24 h-5/6'>
      <div className="h-5/6 sm:w-3/6 w-5/6 rounded-lg sm:p-5 p-2 bg-neutral-950">
          <p className="w-full text-sm font-extralight my-5 text-blue-400">Please Leave a Message we will reach out ASAP</p>
        <input type="email" className="bg-neutral-800 rounded-3xl w-full h-10 mb-6" required placeholder="  Email" ref={email}/>
        <input type="text" className="bg-neutral-800 rounded-3xl w-full h-10 mb-6" placeholder="  Name" ref={username}/>
        <textarea className="bg-neutral-800 w-full h-44" placeholder="  Drop Your Message" ref={message}/>
        <div className="flex justify-center w-full items-center space my-5">
          <div className="sm:w-1/6 w-2/6 mr-3">
            <button className="bg-neutral-800 text-slate-300 h-10 w-full rounded-full" onClick={submitBtn}>Submit</button>
          </div>
        </div>
        <p className={`text-center text-sm font-extralight ${done == "done"?"text-green-500":"hidden"}`}>Message Has Been Recieved, We will reach out ASAP.</p>
        <p className={`text-center text-sm font-extralight ${done == "notdone"?"text-red-600":"hidden"}`}>There was an error, please try again later</p>
      </div>
    </div>
    )
}

export default Contact;