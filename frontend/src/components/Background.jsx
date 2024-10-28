import bg from "/bg.mp4";

function Background(props){
  return (
      <div className={`m-0 p-0`}>    
        <video src={bg} autoPlay muted loop disablePictureInPicture controlsList='nodownload' className={`${props.currentTab == "about"?"hidden":""} fixed pointer-events-none object-cover w-screen h-screen -z-10`}></video>
      </div>
  );
}

export default Background;