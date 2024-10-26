import Content from "./content.jsx";
import events from "/events.jpg";

const eventsFromBackend = [
  {
    image:"https://media.licdn.com/dms/image/v2/D4D22AQHV_99bpFftXg/feedshare-shrink_800/feedshare-shrink_800/0/1702477684304?e=1732752000&v=beta&t=P7oFfOO6VJoZdV4z1R2l4UJoJMxIANYPTsUrxCewtv4",
    heading:"Achiever's Talk",
    content: <p>Hello Community!💫
    Unleash the power of your profile 🌟. Get ready to embark on an unforgettable journey with NEXUS-ASIC! Ignite your imagination, foster innovation and promote collaboration as we delwe into the world 🌍 of LinkedIn. 
    
    Join us for immersive experience on "LINKEDIN OPTIMIZATION" brought to you by NEXUS-ASIC. Enhance your professional presence and make the most of LinkedIn for career growth. Brace up yourself to enlarge networking opportunities, skyup your profile 🌈 and embarking your journey✨
    
    Date 📅: 15/12/23
    Time ⏰: 4PM
    Venue 📍: E-classroom
    
    Mark your calendars and get ready for an astonishing experience. We believe that this event will be a great opportunity to connect with our college community. NEXUS can't wait to share this experience with you and soak up all the positive energy you bring to the Eve!✨☄
    </p>  
  },
  {
    image:"https://media.licdn.com/dms/image/v2/D4D22AQE4yrtlmddq6w/feedshare-shrink_1280/feedshare-shrink_1280/0/1725904892407?e=1732752000&v=beta&t=o5jdMyBPiCm98WnLfdf2u04ctq9adSKTpfhFyKBO0JA",
    heading:"Achiever's Talk",
    content: <p>Hello Community!💫
    Unleash the power of your profile 🌟. Get ready to embark on an unforgettable journey with NEXUS-ASIC! Ignite your imagination, foster innovation and promote collaboration as we delwe into the world 🌍 of LinkedIn. 
    
    Join us for immersive experience on "LINKEDIN OPTIMIZATION" brought to you by NEXUS-ASIC. Enhance your professional presence and make the most of LinkedIn for career growth. Brace up yourself to enlarge networking opportunities, skyup your profile 🌈 and embarking your journey✨
    
    Date 📅: 15/12/23
    Time ⏰: 4PM
    Venue 📍: E-classroom
    
    Mark your calendars and get ready for an astonishing experience. We believe that this event will be a great opportunity to connect with our college community. NEXUS can't wait to share this experience with you and soak up all the positive energy you bring to the Eve!✨☄
    </p>  
  },
];

function Events(){
    return (
      <div className='flex justify-center items-end w-full z-10 text-white absolute sm:bottom-0 sm:h-5/6 sm:top-auto top-36 h-screen overflow-y-scroll'>
        <div className="h-full w-5/6 rounded-lg font-sans font-extralight from-neutral-400">
          {
            eventsFromBackend.map((e)=>{
              return <Content image ={e.image} heading = {e.heading} content = {e.content}/>
            })
          }
        </div>
    </div>
    )
}

export default Events;