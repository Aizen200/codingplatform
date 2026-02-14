import React from 'react'
import Description from './pages/Description'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Question from "./pages/Question";
import Topics from "./pages/Topics";
import Profile  from './pages/Profile';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/auth/signup' element={<Signup/>}></Route>
      <Route path="/question" element={<Question/>}></Route>
      <Route path="/questions/:topic" element={<Topics/>}></Route>
      <Route path='/solve/:id' element={<Description/>}></Route>
       <Route path="/user/:name" element={<Profile/>}></Route>

    </Routes>

  )
}

export default App
