import React from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Popular from './components/Popular/Popular'
// import Offer from './components/Offers/Offer'
import Offer from './components/Offers/Offer'
import About from './components/About/About'
// import Blog from './components/Blog/Blog'
import Blog from './components/Blog/blog'
import Footer from './components/Footer/Footer'


function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Popular />
            <Offer />
            <About />
            <Blog />          
            <Footer />
        </div>
    )
}

export default App