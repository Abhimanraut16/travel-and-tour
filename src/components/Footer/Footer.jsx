import React, {useEffect} from 'react'
import './footer.css'
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'
function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  return (
    <div className="footer">
      <div className="secContainer container .grid">

        <div  data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div  data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
            <a href="#" className='logo'>
              <h1 className='flex'><SiYourtraveldottv className='icon' /> Travel</h1>
            </a>
          </div>

          <div  data-aos="fade-up" data-aos-duration="3000" className="socials flex">
            <FaFacebookF className='icon' />
            <FaInstagramSquare className='icon' />
            <FaTwitter className='icon' />
          </div>

          </div>

          <div  data-aos="fade-up" data-aos-duration="4000" className="footerlinks">
            <span className="linkTitle">
              Information
            </span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>

          </div>
          <div className="footerlinks">
            <span className="linktitle">
              Contact Us
            </span>
            <span className='phone'>9824278289</span>
            <span className='email'>rautabhimanu59@gmail.com</span>
          </div>
      
      </div>
    </div>

  )
}

export default Footer