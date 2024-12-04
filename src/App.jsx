import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Movies from './Components/AllMovies'
import NavBar from "./Components/NavBar"
import HomeView from "./Views/HomeView"
import AboutView from "./Views/AboutView"
import BookmarkView from "./Views/BookmarkView"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/About" element={<AboutView/>}/>
          <Route path="/Bookmark" element={<BookmarkView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
