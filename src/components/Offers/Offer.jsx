import React, {useEffect} from 'react'
import './offer.css'
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import img6 from '../../Assets/6.jpg'
import img7 from '../../Assets/7.jpg'
import img8 from '../../Assets/8.jpg'
import img9 from '../../Assets/9.jpg'
// import img10 from '../../Assets/10.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Offers =[
  {
  id: 1,
  imgSrc: img6,
  // destTitle: 'Kathmandu',
  location: 'Kathmandu, Nepal',
  price: '$1200',

},
{
  id: 2,
  imgSrc: img7,
  // destTitle: 'Simra',
  location: 'Pokhara, Nepal',
  price: '$2000',

},
{
  id: 3,
  imgSrc: img8,
  // destTitle: 'BRj',
  location: 'Texes,USA',
  price: '$1500',

},

{
  id: 4,
  imgSrc: img9,
  // destTitle: 'taj mahal',
  location: 'California, USA',
  price: '$100',

},
// {
//   id: 5,
//   imgSrc: img10,
//   destTitle: 'BRj',
//   location: 'KTM',
//   price: '$300',

// },
]

function Offer() {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  
  return (
    <section className='offer container section'>
      <div className="secContainer">


        <div data-aos="fade-up" data-aos-duration="2000"  className="secIntro">
          <h2 className="secTitle">
            Specail Offer's
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world
          </p>
        </div>

        <div className="mainContent grid">
        
          {
          Offers.map(({imgSrc,price, location, destTitle} 
            )=>{
              return(
                <div data-aos="fade-up" data-aos-duration="3000"  className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt={ destTitle} />
                  <span className='discount'>
                    30% off
                  </span>
                </div>
    
                <div className="offerBody">
                  <div className="price flex">
                    <h4>
                      {price}
                    </h4>
                    <span className='status'>
                      For Rent
                    </span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className='icon' />
                      <small>2 Beds</small>
                    </div>
    
                    <div className="singleAmenity flex">
                      <MdBathtub className='icon' />
                      <small>1 Bath</small>
                    </div>
    
                    <div className="singleAmenity flex">
                      <FaWifi className='icon' />
                      <small>Wi-Fi</small>
                    </div>
    
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className='icon' />
                      <small>2 Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className='icon' />
                    <small>250 Vine #200, {location}</small>
                  </div>
    
                  <button className='btn flex'>
                    View Details
                    <BsArrowRightShort className='icon' />
                  </button>
    
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

export default Offer