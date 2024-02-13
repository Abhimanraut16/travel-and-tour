import React, {useEffect} from 'react'
import './popular.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import img4 from '../../Assets/4.jpg'
import img5 from '../../Assets/5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

let Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Kathmandu',
    location: 'Nepal',
    grade: 'Cultural Relax'

  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Mustang',
    location: 'Nepal',
    grade: 'Cultural Relax'

  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Mustang',
    location: 'Nepal',
    grade: 'Cultural Relax'

  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Pokhara',
    location: 'Nepal',
    grade: 'Cultural Relax'

  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Humla',
    location: 'Nepal',
    grade: 'Cultural Relax'

  },

]




function Popular() {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  

  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500"  className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>

        </div>

        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,  location, grade}) => {
              return   (
                <div data-aos="fade-up" className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="Image title" />
                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>
                       {location}
                      </p>
                      <BsArrowRightShort className='icon' />

                    </div>
                  </div>

                  <div className="destfooter">
                    <div className="number">
                      0{id}
                    </div>
                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className='flex'>
                        <span className='dot'>
                          <BsDot className='icon' />
                        </span>
                        <h3>Travel</h3>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </section>
  )
}

export default Popular