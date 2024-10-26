
function Teachers(props){
    return (
        <div className="sm:flex sm:mb-0 mb-5">
            <div className="flex justify-center items-center">
                <div>
                    <img src={props.pfp} alt="" className="sm:w-32 w-40 rounded-lg"/>
                    <div className="my-3 flex justify-center items-center">
                        <p>{props.nameofTeacher}</p>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-28 ">
                <div className="sm:ml-7">
                <div className="mb-2 font-semibold text-2xl">
                    <p>Teacher Coordinator</p>
                </div>
                <div className="text-left">
                    {props.about}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Teachers;