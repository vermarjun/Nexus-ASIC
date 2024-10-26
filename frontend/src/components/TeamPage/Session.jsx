function Session(){
  const years = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="h-16 rounded-3xl bg-neutral-950 my-5 flex justify-start items-center">
        <div className="w-2/3 text-blue-400 ml-3 sm:ml-4">
            <p className="text-xl sm:text-2xl font-medium">Nexus Members</p>
        </div>
        <div className="w-1/3 sm:space-x-8 flex justify-end">
          <select name="" id="" className="bg-blue-400 text-neutral-950 rounded-full mr-3 p-2 ">
            <option value="">2024</option>
            <option value="">2023</option>
            <option value="">2022</option>
            <option value="">2021</option>
            <option value="">2020</option>
            <option value="">2019</option>
            <option value="">2018</option>
          </select>
        </div>
    </div>
  )
}

export default Session;