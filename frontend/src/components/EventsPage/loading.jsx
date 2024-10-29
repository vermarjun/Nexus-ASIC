function Loading(){
    return (
        <>
        <div className="h-4/6 bg-neutral-950 mb-5 sm:relative sm:top-32 p-2 rounded-lg">
            {/* <img className="sm:w-1/5 rounded-xl" src={props.poster} alt="" /> */}
            <div className="w-full mt-5 sm:mt-3 h-2/6 rounded-lg bg-neutral-900 animate-pulse">
            </div>
            <div className="w-full mt-5 h-3/6 sm:h-72 rounded-lg bg-neutral-900 animate-pulse">
            </div>
        </div>
        <div className="h-4/6 bg-neutral-950 mb-5 sm:relative sm:top-32 p-2 rounded-lg">
            {/* <img className="sm:w-1/5 rounded-xl" src={props.poster} alt="" /> */}
            <div className="w-full mt-5 sm:mt-3 h-2/6 rounded-lg bg-neutral-900 animate-pulse">
            </div>
            <div className="w-full mt-5 h-3/6 sm:h-72 rounded-lg bg-neutral-900 animate-pulse">
            </div>
        </div>
        </>
    )
}

export default Loading;