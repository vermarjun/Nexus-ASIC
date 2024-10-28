import { useState, useEffect } from 'react'
import Sign from './components/auth';
import Dashboard from './components/dashBoard';
import './App.css'
import axios from 'axios';

export const API_URL = "https://nexus-asic-backend.vercel.app"; 

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {/* <Dashboard/> */}
      {loggedIn?<Dashboard/>:<Sign setLoggedIn={setLoggedIn}/>}
    </div>
  )
}

export default App
