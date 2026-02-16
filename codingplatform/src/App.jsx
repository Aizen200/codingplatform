import React from 'react'
import Description from './pages/Description'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Question from "./pages/Question";
import Topics from "./pages/Topics";
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/question" element={<Question />} />
      <Route path="/questions/:topic" element={<Topics />} />
      <Route path="/solve/:id" element={<Description />} />
      <Route path="/user/:name" element={<Profile />} />

    </Routes>
  )
}

export default App

