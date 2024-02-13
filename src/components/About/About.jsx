import React,{useEffect} from 'react'
import './about.css'



import img from '../../Assets/mounten.jpeg'
import imgcostomer from '../../Assets/costomer.webp'
// import imghikin from '../../Assets/hikin.jpeg'
import imgservice from '../../Assets/service.jpeg'
import imgstaff from '../../Assets/staff.webp'

// videos 
import video from '../../Assets/tm.mp4'


import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  
  return (
    <section className='about section'>
      <div className="secContainer">
        <h2  data-aos="fade-up" className="title">
          Why Hikings?
        </h2>
        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration="2000"  className="singleItem">
            <img src={img} alt="" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows the a chance to break awy from the normal of daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500"  className="singleItem">
            <img src={imgcostomer} alt="" />
            <h3>250+ Coctomer</h3>
            <p>
              Research shows the a chance to break awy from the normal of daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src="src\Assets\hiking.jpeg" alt="" />
            <h3>350+ Hikins</h3>
            <p>
              Research shows the a chance to break awy from the normal of daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3500" className="singleItem">
            <img src={imgservice} alt="" />
            <h3>90+ Serviceses</h3>
            <p>
              Research shows the a chance to break awy from the normal of daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="4000" className="singleItem">
            <img src={imgstaff} alt="" />
            <h3>50+ Best stafh</h3>
            <p>
              Research shows the a chance to break awy from the normal of daily life reduces stress and improves health and well-being.
            </p>
          </div>


        </div>

        <div className="videoCard container">
          <div className="cardCounten grid">

            <div data-aos="fade-" data-aos-duration="2000" className="cardText">
              <h2> Wonderful time experience in there</h2>
              <p>The Adventure subrabking is besed on an equally weighted average of scores from five country.</p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2500" className="cardvideo">
              <video src={video} autoPlay loop muted type='video/mp4'></video>

            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default About