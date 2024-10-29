import { useRef, useState } from "react"
import axios from "axios"

import { API_URL } from "../App";

function Sign(props){
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState('x');
    const Username = useRef("");
    const Password = useRef("");
    async function verify(){
        if (Username.current.value == "") Username.current.focus();
        else if (Password.current.value == "") Password.current.focus();
        else {
            setLoading(true);
            const response = await axios.post(`${API_URL}/api/login`,{
                "username": Username.current.value,
                "password": Password.current.value
            });
            // console.log(response);
            setLoading(false);
            ((response.data.token)=="")?setValid("invalid"):props.setLoggedIn(true);
        }
    }
    return(
        <div className="bg-black h-screen w-screen flex justify-center items-center text-white">
            <div className="w-5/6 sm:w-fit border-2 p-6 rounded-3xl border-blue-400 h-4/6 ">
                    <div className="flex justify-center items-center mb-8">
                        <div>
                            <p className="ml-1 text-blue-400 mb-3 text-center font-medium text-3xl">Admin Login</p>
                            <div className="border-2 border-blue-400 rounded-full"></div>
                        </div>
                    </div>
                <div className="flex justify-center items-center">
                    <div>
                        <div>
                            <input className="bg-neutral-950 w-64 mt-5 sm:w-80 rounded-full h-12" type="text" placeholder="  Username" ref={Username} />
                        </div>
                        <div>
                            <input className="bg-neutral-950 w-64 sm:w-80 mt-10 rounded-full h-12" type="password" placeholder="  Password" ref={Password}/>
                        </div>
                        <div className="flex justify-center items-center">
                            <button disabled={loading} className={`${loading?"animate-pulse":""} w-56 sm:hover:bg-blue-200 sm:w-40 mt-10 rounded-full h-12 bg-blue-400 text-black font-medium text-lg ${loading?"bg-blue-500":""}`} onClick={verify}>Login</button>
                        </div>
                        <p className={`${(loading)?" mt-4 text-center text-blue-400":"hidden"}`}>Loading..</p>
                    </div>
                </div>
                <div className={`text-red-600 flex justify-center items-center mt-5 ${(valid == "invalid")?"":"hidden"}`}>
                    <p>Invalid Credentials</p>
                </div>
            </div>
        </div>
    )
}

export default Sign