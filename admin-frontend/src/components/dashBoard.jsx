import { useState } from "react";
import Navbar from "./navibar.jsx"
import Member from "./members.jsx";
import Events from "./events.jsx";
import Coordinator from "./coordinator.jsx";

function Dashboard(){
    const [page, setPage] = useState("member")
    return(
        <>
            <Navbar setPage={setPage} page={page}/>
            <div className="bg-black h-screen w-screen -z-10">
                {(page=="member")?<Member/> : ""}
                {(page=="events")?<Events/> : ""}
                {(page=="coordinator")?<Coordinator/> : ""}
            </div>
        </>
    )
}

export default Dashboard;