import { useState, useRef, useEffect } from "react";
import axios from "axios";

function DisplayMembers(props){
    return (
        <>
        <div className="mb-5 bg-neutral-950 p-5 rounded-xl">
            <div className="font-thin text-lg">
                <p>Profile Picture: {props.pfp}</p>
                <p>Name: {props.name}</p>
                <p>Tenure Year: {props.year}</p>
                <p>About: {props.about}</p>
                <p>Branch: {props.branch}</p>
            </div>
            <div className=" mt-3 border-2 rounded-full border-blue-400"></div>
        </div>
        </>
    )
}

function Member(){
    const dropDownOptions = [
        {label:"2024", value:1},
        {label:"2023", value:2},
        {label:"2022", value:3},
        {label:"2021", value:4},
        {label:"2020", value:5},
        {label:"2019", value:6},
        {label:"2018", value:7},
    ]
    const [fetchYear, setFetchYear] = useState(2024);
    function handelSelect(event){
        setFetchYear(2025-event.target.value);
    }
    // to add loading animation between fetch states
    const [loading, setLoading] = useState(false);
    // To manage clicks on btns like update add delete
    const [dbUpdated, updateDb] = useState(1);
    // array where i put all my events as fetched from backend
    let [members, setMembers] = useState([]);
    // This one is responsible to diplay success or error message in backend request
    const [successMessage, setSuccessmessage] = useState("none");
    // This one is responsible to redirect from add to update to delete page
    const [ToDo, setToDo] = useState("add");
    // function to make backend request to display all added events on bottom of the page
    async function fetchMembersData(fetchYear){
        console.log(fetchYear);
        const response = await axios.get('/api/members',{
            params:{
                year: fetchYear
            }
        });
        setMembers(response.data.data);
        // console.log(response.data.data)
    }
    // This fetches data as soon as component mounts
    useEffect(()=>{
        fetchMembersData(fetchYear);        
    },[])
    // This fetches data anytime i click any btn(add update or delete [dependency array])
    useEffect(()=>{
        fetchMembersData(fetchYear);        
    },[dbUpdated, fetchYear])
    const pfpAdd = useRef(), aboutAdd = useRef(), dateAdd = useRef(), nameAdd = useRef(), branchAdd = useRef();
    const pfpUpdate = useRef(), aboutUpdate = useRef(), dateUpdate = useRef(), nameUpdate = useRef(), branchUpdate = useRef();
    const nameDelete = useRef(), dateDelete = useRef(), branchDelete = useRef();
    
    async function SubmitAdd(){
        if (pfpAdd.current.value=="") pfpAdd.current.focus();
        else if (nameAdd.current.value=="") nameAdd.current.focus();
        else if (dateAdd.current.value=="") dateAdd.current.focus();
        else if (aboutAdd.current.value=="") aboutAdd.current.focus();
        else if (branchAdd.current.value=="") branchAdd.current.focus();
        else {
            let error = false;
            let response = null;
            try {
                setLoading(true);
                response = await axios.post("/api/members/add", {
                    pfp:pfpAdd.current.value,
                    name:nameAdd.current.value,
                    date:dateAdd.current.value,
                    about:aboutAdd.current.value,
                    branch:branchAdd.current.value
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
        else if (dateUpdate.current.value=="") dateUpdate.current.focus();
        else if (aboutUpdate.current.value=="") aboutUpdate.current.focus();
        else if (branchUpdate.current.value=="") branchUpdate.current.focus();
        else {
            let error = false;
            let response = null;
            try {
                setLoading(true);
                response = await axios.post("/api/members/update", {
                    pfp:pfpUpdate.current.value,
                    name:nameUpdate.current.value,
                    date:dateUpdate.current.value,
                    about:aboutUpdate.current.value,
                    branch:branchUpdate.current.value
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
        else if (dateDelete.current.value=="") dateDelete.current.focus();
        else if (branchDelete.current.value=="") branchDelete.current.focus();
        else {
            let err = false;
            let response = null;
            try{
                setLoading(true);
                response = await axios.post("/api/members/delete", {
                    name:nameDelete.current.value,
                    date:dateDelete.current.value,
                    branch:branchDelete.current.value,
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
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Name" ref={nameAdd} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Branch" ref={branchAdd} />
                        <input type="number" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Tenure Year" ref={dateAdd} />
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
                        <input type="url" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Profile Picture Link" ref={pfpUpdate} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Name" ref={nameUpdate} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Branch" ref={branchUpdate} />
                        <input type="number" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Tenure Year" ref={dateUpdate} />
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
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Event Title" ref={nameDelete} />
                        <input type="text" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Event Title" ref={branchDelete} />
                        <input type="number" className="h-10 bg-neutral-900 w-full rounded-full" name="" id="" placeholder="  Tenure Year" ref={dateDelete} />
                    </div>
                    <div className="flex justify-center items-center sm:space-x-5 space-x-2">
                        <div className="flex justify-center items-center">
                            <button className="text-xl mt-5 text-black font-normal bg-blue-500 p-2 rounded-2xl" onClick={SubmitDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center w-full absolute text-white sm:h-1/3 h-2/6 bottom-0">
            {/* <div> */}
                {/* dropdown to select year */}
                <div className="ml-0 w-5/6 sm:w-3/6 flex ">
                    <div className="w-full overflow-y-scroll">
                        {members.map((val)=>{
                            return <DisplayMembers name={val.memberName} about={val.about} pfp={val.pfp} year={val.year} branch={val.branch}/>
                        })}
                    </div>
                    <div className="">
                        <select className="text-black bg-blue-400 border-none z-50 h-10 rounded-full p-1 relative top-0" name="" id="" onChange={handelSelect}>
                                {dropDownOptions.map((option)=>{
                                    return <option className="" value={option.value}>{option.label}</option>
                                })}
                        </select>
                    </div>
                </div>
            {/* </div> */}
        </div>
        </>
    )
}
export default Member;