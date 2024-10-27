function Content(props){
    return (
        <div className="sm:flex mb-5 bg-neutral-950 sm:p-5 p-5 rounded-lg">
            <img className="sm:w-1/5 rounded-xl" src={props.poster} alt="" />
            <div className="w-full sm:ml-5 sm:mt-0 mt-5 ">
                <div className="w-full flex">
                    <p className="w-full text-xl font-bold mb-4 text-neutral-300">{props.eventTitle}</p>
                    <p className="w-fit text-nowrap">{props.eventDate}</p>
                </div>
                <div>
                    {props.aboutEvent}
                </div>
            </div>
        </div>
    )
}

export default Content;