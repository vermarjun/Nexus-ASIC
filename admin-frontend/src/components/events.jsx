import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../App";

function DisplayEvents(props){
    return (
        <>
        <div className="my-5 bg-neutral-950 p-5 rounded-xl">
            <div className="font-thin text-lg space-y-5">
                <p>Poster: {props.poster}</p>
                <p>Title: {props.title}</p>
                <p>Date: {props.date}</p>
                <p>About: {props.about}</p>
            </div>
            <div className=" mt-3 border-2 rounded-full border-blue-400"></div>
        </div>
        </>
    )
}

function Events(){
    // to add loading animation between fetch states
    const [loading, setLoading] = useState(false);
    // To manage clicks on btns like update add delete
    const [dbUpdated, updateDb] = useState(1);
    // array where i put all my events as fetched from backend
    const [events, setEvents] = useState([]);
    // This one is responsible to diplay success or error message in backend request
    const [successMessage, setSuccessmessage] = useState("none");
    // This one is responsible to redirect from add to update to delete page
    const [ToDo, setToDo] = useState("add");
    // function to make backend request to display all added events on bottom of the page
    async function fetchEventsData(){
        const response = await axios.get(`${API_URL}/api/events`);
        setEvents(response.data.data);
        // console.log(response.data.data)
    }
    // This fetches data as soon as component mounts
    useEffect(()=>{
        fetchEventsData();        
    },[])
    // This fetches data anytime i click any btn(add update or delete [dependency array])
    useEffect(()=>{
        fetchEventsData();        
    },[dbUpdated])
    const posterAdd = useRef(), titleAdd = useRef(), dateAdd = useRef(), aboutAdd = useRef();
    const posterUpdate = useRef(), titleUpdate = useRef(), dateUpdate = useRef(), aboutUpdate = useRef();
    const titleDelete = useRef(), dateDelete = useRef();
    
    async function SubmitAdd(){
        if (posterAdd.current.value=="") posterAdd.current.focus();
        else if (titleAdd.current.value=="") titleAdd.current.focus();
        else if (dateAdd.current.value=="") dateAdd.current.focus();
        else if (aboutAdd.current.value=="") aboutAdd.current.focus();
        else {
            let error = false;
            let response = null;
            try {
                setLoading(true);
                response = await axios.post("/api/events/add", {
                    poster:posterAdd.current.value,
                    title:titleAdd.current.value,
                    date:dateAdd.current.value,
                    about:aboutAdd.current.value
                })
                setLoading(false);
            } catch(e){
                error = true;
                setSuccessmessage("notdone")
            }
            if (!error && response!=null){
                if (response.data.message == "done"){
                    setSuccessmessage("done");
                } else {
                    setSuccessmessage("notdone");
                }
            }
        }
        updateDb(c=>c+1);
    }
    async function SubmitUpdate(){
        if (posterUpdate.current.value=="") posterUpdate.current.focus();
        else if (titleUpdate.current.value=="") titleUpdate.current.focus();
        else if (dateUpdate.current.value=="") dateUpdate.current.focus();
        else if (aboutUpdate.current.value=="") aboutUpdate.current.focus();
        else {
            let error = false;
            let response = null;
            try {
                setLoading(true);
                response = await axios.post("/api/events/update", {
                    poster:posterUpdate.current.value,
                    title:titleUpdate.current.value,
                    date:dateUpdate.current.value,
                    about:aboutUpdate.current.value
                })
                setLoading(false);
            } catch(e){
                error = true;
                setSuccessmessage("notdone")
            }
            if (!error && response!=null){
                if (response.data.message == "done"){
                    setSuccessmessage("done");
                } else {
                    setSuccessmessage("notdone");
                }
            }
        }
        updateDb(c=>c+1);
    }
    async function SubmitDelete(){
        if (titleDelete.current.value=="") titleDelete.current.focus();
        else if (dateDelete.current.value=="") dateDelete.current.focus();
        else {
            let err = false;
            let response = null;
            try{
                setLoading(true);
                response = await axios.post("/api/events/delete", {
                    title:titleDelete.current.value,
                    date:dateDelete.current.value,
                })
                setLoading(false);
            } catch(error){
                err = true;
                setSuccessmessage("notdone")
            }
            if (!err && response!=null){
                if (response.data.message == "done"){
                    setSuccessmessage("done");
                } else {
                    setSuccessmessage("notdone");
                }
            }
        }
        updateDb(c=>c+1);
    }
    return (
        <>
        <div className="mt-4 absolute top-16 w-full text-white space-x-5 flex items-center justify-center font-thin z-50">
            <button className={`${ToDo=="add"?"text-blue-400":""}`}  onClick={()=>{ setToDo("add"); setSuccessmessage("none") }}>Add</button>
            <p>|</p>
            <button className={`${ToDo=="update"?"text-blue-400":""}`}  onClick={()=>{setToDo("update"); setSuccessmessage("none") }}>Update</button>
            <p>|</p>
            <button className={`${ToDo=="delete"?"text-blue-400":""}`} onClick={()=>{setToDo("delete"); setSuccessmessage("none") }}>Delete</button>
        </div>
        <div className="h-3/6 flex justify-center top-16 absolute w-full z-30 text-white">
            <div className="sm:w-3/6 w-5/6">
                {/* ADDD */}
                <div className={`${ToDo=="add"?"":"hidden"} absolute top-14 p-2 w-5/6 sm:w-3/6 border-2 border-blue-400 rounded-xl bg-black z-50`}>
                    <div className="flex justify-center items-center w-full">
                        <p className={`mt-1 ${successMessage=="notdone"?"text-red-700":"hidden"} text-center`}>There Seems to be an error in Adding data, please try again</p>
                        <p className={`mt-1 ${successMessage=="done"?"text-green-700":"hidden"} text-center`}>Data Has Been Successfully Added!</p>
                        <p className={`mt-1 ${loading?"text-blue-400":"hidden"} text-center`}>Loading...</p>
                    </div>
                    <div className="space-y-2 mt-1">
                        <input type="url" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Poster" ref={posterAdd} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Event Title" ref={titleAdd} />
                        <input type="date" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Tenure Year" ref={dateAdd} />
                        <textarea type="text" className=" bg-neutral-900 w-full" name="" id="" placeholder=" About" ref={aboutAdd}/>
                    </div>
                    <div className="flex justify-center items-center sm:space-x-5 space-x-2">
                        <div className="flex justify-center items-center">
                            <button disabled={loading} className="w-20 text-xl mt-0 text-black font-normal bg-blue-500 p-2 rounded-2xl" onClick={SubmitAdd}>Add</button>
                        </div>
                    </div>
                </div>
                {/* UPDATE */}
                <div className={`${ToDo=="update"?"":"hidden"} absolute top-14 p-2 w-5/6 sm:w-3/6 border-2 border-blue-400 rounded-xl bg-black z-50`}>
                    <div className="flex justify-center items-center w-full">
                        <p className={`mt-0 ${successMessage=="notdone"?"text-red-700":"hidden"} text-center`}>There Seems to be an error in Adding data, please try again</p>
                        <p className={`mt-0 ${successMessage=="done"?"text-green-700":"hidden"} text-center`}>Data Has Been Successfully Added!</p>
                        <p className={`mt-0 ${loading?"text-blue-400":"hidden"} text-center`}>Loading...</p>
                    </div>
                    <div className="space-y-2">
                        <input type="url" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Poster Link" ref={posterUpdate} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Event Title" ref={titleUpdate} />
                        <input type="date" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Tenure Year" ref={dateUpdate} />
                        <textarea type="text" className="bg-neutral-900 w-full" name="" id="" placeholder=" About" ref={aboutUpdate}/>
                    </div>
                    <div className=" flex justify-center items-center">
                            <button className="text-xl text-black font-normal bg-blue-500 p-2 rounded-2xl" onClick={SubmitUpdate}>Update</button>
                    </div>
                </div>
                {/* DELETE */}
                <div className={`${ToDo=="delete"?"":"hidden"} absolute top-14 p-2 w-5/6 sm:w-3/6 border-2 border-blue-400 rounded-xl`}>
                    <div className="flex justify-center items-center w-full">
                        <p className={`mt-5 ${successMessage=="notdone"?"text-red-700":"hidden"} text-center`}>There Seems to be an error in Deleting data, please try again</p>
                        <p className={`mt-5 ${successMessage=="done"?"text-green-700":"hidden"} text-center`}>Data Has Been Successfully Deleted!</p>
                    </div>
                    <div className="space-y-3 mt-2">
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Event Title" ref={titleDelete} />
                        <input type="date" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Date" ref={dateDelete} />
                    </div>
                    <div className="flex justify-center items-center sm:space-x-5 space-x-2">
                        <div className="flex justify-center items-center">
                            <button className="text-xl mt-5 text-black font-normal bg-blue-500 p-2 rounded-2xl" onClick={SubmitDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-start sm:justify-center w-full absolute text-white h-80 sm:h-80 bottom-0 overflow-y-scroll break-words">
            <div className="ml-8 sm:ml-0 sm:w-3/6 w-5/6">
                {events.map((val, index)=>{
                    return <DisplayEvents key={index} title={val.eventTitle} about={val.aboutEvent} poster={val.poster} date={val.eventDate}/>
                })}
            </div>
        </div>
        </>
    )
}
export default Events;