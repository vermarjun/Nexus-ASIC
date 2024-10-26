
function Content(props){
    return (
        <div className="sm:flex mb-5 bg-neutral-950 sm:p-5 p-5 rounded-lg">
            <img className="sm:w-1/5 rounded-xl" src={props.image} alt="" />
            <div className="w-full sm:ml-5 sm:mt-0 mt-5 ">
                <p className="text-xl font-bold mb-4 text-neutral-300">{props.heading}</p>
                <div>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Content;