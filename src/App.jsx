import { useState } from 'react'
import './App.css'
import Appbar from './components/Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Divider from '@mui/material-next/Divider';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return <div>
    <Router>
      <Appbar />
      <Divider></Divider>
      <Routes>
        <Route path={"/home" } element={<Home />} />
        <Route path={"/" } element={<Home />} />
        <Route path={"/login" } element={<Login />} />
        <Route path={"/signup" } element={<Signup />} />
      </Routes>
    </Router>
  </div>
}
export default App
