import { useState } from 'react'
import './App.css'
import Appbar from './components/Appbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Divider from '@mui/material-next/Divider';

function App() {
  return <div>
    <Router>
      <Appbar />
      <Divider></Divider>
      <Routes>
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </Router>
  </div>
}
export default App
