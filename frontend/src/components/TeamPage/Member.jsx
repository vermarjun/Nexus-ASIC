function Member(props){
    return (
        <div className="mb-6">
          <div className="sm:flex rounded-lg bg-neutral-950 justify-start items-center sm:p-5 p-3">
            <div className="flex justify-center items-center mb-4 sm:mb-0">
              <img src={props.pfp} alt="profile picture" className="w-32"/>
            </div>
            <div className="w-full sm:ml-6 min-h-28">
              <div className="mb-3  font-thin">
                <p>{props.about}</p>
              </div>
              <div className="mb-1 font-bold">
                <p>{props.memberName}</p>
              </div>
              <div className="">
                <p>{props.branch}</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Member;