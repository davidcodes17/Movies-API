import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/movie/:id' element={<MoviePage />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
  )
}

export default App