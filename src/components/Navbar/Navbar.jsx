import React, { useState } from 'react'
import './nav.css'
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar  activeNavbar')
  }
  const removNav = () => {
    setActive('navBar')
  }

const [transparent, setTransparent]= useState('header')
const addBg = ()=>{
  if(window.scrollY >=10){
    setTransparent('header activeHeader')
  }
  else{
    setTransparent('header')
  }
}
window.addEventListener('scroll', addBg)



  return (
    <section className='navBarSection'>
      <div className={transparent}>

        <div className="logoDiv">
          <a href="#" className='logo'>
            <h1><SiYourtraveldottv className='icon' />
              Travel
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="./about" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="../" className="navLink">Gallery</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink"> Contact</a>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>
              <button className='btn'>
                <a href="#">Sign Up</a>
              </button>
            </div>

          </ul>

          <div onClick={removNav} className="clossNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <FaBars className='icon' />
        </div>
      </div>

    </section>
  )
}

export default Navbar