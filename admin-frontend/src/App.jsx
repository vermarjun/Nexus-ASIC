import { useState, useEffect } from 'react'
import Sign from './components/auth';
import Dashboard from './components/dashBoard';
import './App.css'
import axios from 'axios';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Dashboard/>
      {/* {loggedIn?<Dashboard/>:<Sign setLoggedIn={setLoggedIn}/>} */}
    </div>
  )
}

export default App
