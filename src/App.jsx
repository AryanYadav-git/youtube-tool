import { useState, useEffect } from 'react'
import './App.css'
import Appbar from './components/Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Divider from '@mui/material-next/Divider';
import Login from './components/Login';
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import PrivacyPolicy from './components/PrivacyPolicy';
import Pricing from './components/Pricing';
import Error from './components/Error';

function App() {
  const [Admin, setAdmin] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/admin/me",
      {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      }).then((data) => {
        setAdmin(data.data.username);
      })
  }, [])

  return <div>
    <Router>
      {!Admin && <div>< Appbar />
      <Divider></Divider></div>}
      <Routes>
        <Route path={"/home" } element={<Home />} />
        <Route path={"/" } element={<Home />} />
        <Route path={"/login" } element={<Login />} />                                                                      
        <Route path={"/signup" } element={<Signup />} />
        <Route path={"/prices" } element={<Pricing />} />
        <Route path={"/privacy" } element={<PrivacyPolicy />} />
        <Route path={"/error" } element={<Error />} />

        {Admin && <Route path={"me"} element={<Sidebar/>} />}
      </Routes>
    </Router>
  </div>
}
export default App
