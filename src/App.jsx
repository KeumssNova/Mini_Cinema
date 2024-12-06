import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import NavBar from "./Components/NavBar"
import HomeView from "./Views/HomeView"
import AboutView from "./Views/AboutView"
import BookmarkView from "./Views/BookmarkView"
import Footer from './Components/Footer'


function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomeView/>}/>
          <Route path="/About/:id" element={<AboutView/>}/>
          <Route path="/Bookmark" element={<BookmarkView/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
