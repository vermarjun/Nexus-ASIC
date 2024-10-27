function Navbar(props){
    function addMems(){
        props.setPage("member")
    }
    function addEvents(){
        props.setPage("events")
    }
    function addCoordinator(){
        props.setPage("coordinator")
    }
    return (
        <div className="text-white absolute h-16 w-screen bg-neutral-950 z-50 flex justify-center items-center space-x-3 sm:space-x-10">
            <div className="sm:w-28 flex justify-center items-center">
                <button className={`text-2xl text-center ${(props.page=="member")? "text-blue-400":"text-white"}`} onClick={addMems}>Members</button>
            </div>
            <div className="sm:w-28 flex justify-center items-center">
                <button className={`text-2xl text-center ${(props.page=="events")? "text-blue-400": "text-white"}`} onClick={addEvents}>Events</button>
            </div>
            <div className="sm:w-fit flex justify-center items-center">
                <button className={`text-2xl text-center ${(props.page=="coordinator")? "text-blue-400": "text-white"}`} onClick={addCoordinator}>Coordinator</button>
            </div>
        </div>
    )
}

export default Navbar;