import Teachers from "./teachers.jsx"

const data = [
  { 
    pfp:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
    nameofTeacher: "Amit Jain Sir",
    about : <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptas! Maiores, ex illo ab iste cupiditate, dolores recusandae repudiandae adipisci aperiam, aliquid libero harum mollitia numquam nesciunt in dolor totam!</p>
  },
  { 
    pfp:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
    nameofTeacher: "Amit Jain Sir",
    about : <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ea sunt veritatis minus reiciendis sed, natus provident obcaecati temporibus tempore pariatur perferendis tenetur, nisi cum consequuntur eligendi illum id ratione!</p>
  }
]

function Coordinator(){
    return (
        <div className="rounded-lg bg-neutral-950 sm:p-5 p-3 font-sans font-extralight from-neutral-400">
          <div className="">
              <p className="mb-2 font-semibold text-2xl">Meet our team</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorum molestiae voluptates atque necessitatibus placeat laudantium? 
                Illo porro suscipit accusantium velit enim natus voluptas fugiat! Non, rerum! Ea, soluta impedit?
                Illo porro suscipit accusantium velit enim natus voluptas fugiat! Non, rerum! Ea, soluta impedit?
              </p>
          </div>
          <div className="border-2 my-5 rounded-full border-blue-400"></div>
          {data.map((e)=>{
            return <Teachers pfp={e.pfp} nameofTeacher={e.nameofTeacher} about={e.about} />
          })}
        </div>
    )
}

export default Coordinator;