function Contact(){
    return (
      <div className='flex justify-center items-center w-full z-10 text-white absolute top-24 h-5/6 font-sans'>
      <div className="h-5/6 sm:w-3/6 w-5/6 rounded-lg sm:p-5 p-1 backdrop-blur-3xl bg-black">
        <input type="email" className="bg-neutral-950 rounded-3xl placeholder:text-slate-300 w-full h-10 mb-6" required placeholder="  Email"/>
        <input type="text" className="bg-neutral-950 rounded-3xl placeholder:text-slate-300 w-full h-10 mb-6" placeholder="  Name"/>
        <textarea className="bg-neutral-950 placeholder:text-slate-300 w-full h-44" placeholder="  Drop Your Message"/>
        <div className="flex justify-center w-full items-center space my-5">
          <div className="sm:w-1/6 w-2/6 mr-3">
            <button className="bg-neutral-950 text-slate-300 h-10 w-full rounded-full">Submit</button>
          </div>
          <div className="sm:w-5/6 w-4/6">
            <p >Please Leave a Message we will reach out ASAP</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Contact;