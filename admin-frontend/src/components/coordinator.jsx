import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { API_URL } from "../App";

function DisplayCoordinator(props){
    return (
        <>
        <div className="my-5 bg-neutral-950 p-5 rounded-xl w-full">
            <div className="font-thin text-lg space-y-5">
                <p>Profile Pic Link: {props.pfp}</p>
                <p>Name: {props.name}</p>
                <p>About: {props.about}</p>
                <p>Position: {props.position}</p>
            </div>
            <div className=" mt-3 border-2 rounded-full border-blue-400"></div>
        </div>
        </>
    )
}

function Coordinator(){
    const [loading, setLoading] = useState(false);
    const [dbUpdated, updateDb] = useState(1);
    let [coordinators, setcoordinators] = useState([]);
    async function fetchCoordinatorsData(){
        const response = await axios.get(`${API_URL}/api/coordinators`);
        setcoordinators(response.data.data);
    }
    useEffect(()=>{
        fetchCoordinatorsData();        
    },[])
    useEffect(()=>{
        fetchCoordinatorsData();        
    },[dbUpdated])
    const [successMessage, setSuccessmessage] = useState("none");
    const [ToDo, setToDo] = useState("add");
    const pfpAdd = useRef(), nameAdd = useRef(), positionAdd = useRef(), aboutAdd = useRef();
    const pfpUpdate = useRef(), nameUpdate = useRef(), positionUpdate = useRef(), aboutUpdate = useRef();
    const nameDelete = useRef(), positionDelete = useRef();
    
    async function SubmitAdd(){
        if (pfpAdd.current.value=="") pfpAdd.current.focus();
        else if (nameAdd.current.value=="") nameAdd.current.focus();
        else if (positionAdd.current.value=="") positionAdd.current.focus();
        else if (aboutAdd.current.value=="") aboutAdd.current.focus();
        else {
            let error = false;
            let response = null;
            try {
                setLoading(true);
                response = await axios.post("/api/coordinators/add", {
                    pfp:pfpAdd.current.value,
                    name:nameAdd.current.value,
                    position:positionAdd.current.value,
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
        if (pfpUpdate.current.value=="") pfpUpdate.current.focus();
        else if (nameUpdate.current.value=="") nameUpdate.current.focus();
        else if (positionUpdate.current.value=="") positionUpdate.current.focus();
        else if (aboutUpdate.current.value=="") aboutUpdate.current.focus();
        else {
            let error = false;
            let response = null;
            try {
                setLoading(true);
                response = await axios.post("/api/coordinators/update", {
                    pfp:pfpUpdate.current.value,
                    name:nameUpdate.current.value,
                    position:positionUpdate.current.value,
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
        if (nameDelete.current.value=="") nameDelete.current.focus();
        else if (positionDelete.current.value=="") positionDelete.current.focus();
        else {
            let err = false;
            let response = null;
            try{
                setLoading(true);
                response = await axios.post("/api/coordinators/delete", {
                    name:nameDelete.current.value,
                    position:positionDelete.current.value,
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
                        <input type="url" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Profile Pic Link" ref={pfpAdd} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Teacher Name" ref={nameAdd} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Position Ex: Assitant Prof" ref={positionAdd} />
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
                        <input type="url" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Profile Pic Link" ref={pfpUpdate} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Teacher Name" ref={nameUpdate} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Position Ex: Assitant Prof" ref={positionUpdate} />
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
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Teacher Name" ref={nameDelete} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Position Ex: Assitant Prof" ref={positionDelete} />
                    </div>
                    <div className="flex justify-center items-center sm:space-x-5 space-x-2">
                        <div className="flex justify-center items-center">
                            <button className="text-xl mt-5 text-black font-normal bg-blue-500 p-2 rounded-2xl" onClick={SubmitDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-start sm:justify-center w-full absolute text-white h-3/6 sm:h-80 bottom-0 overflow-y-scroll">
            <div className="ml-8 mt-5 sm:ml-0 sm:w-3/6 w-5/6 break-words">
                {coordinators.map((val)=>{
                    return <DisplayCoordinator name={val.teacherName} about={val.about} pfp={val.pfp} position={val.position}/>
                })}
            </div>
        </div>
        </>
    )
}
export default Coordinator;