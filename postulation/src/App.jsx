import Home from './components/home/Home.jsx'
import Subscribe from './components/Subscribe/Subscribe.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutProject from './components/aboutproject/AboutProject.jsx';
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/about" element={<AboutProject />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
