import React,{useEffect} from 'react'
import './Blog.css'
import { BsArrowRightShort } from "react-icons/bs";

import img15 from '../../Assets/15.jpg'
import img12 from '../../Assets/12.jpg'
import img13 from '../../Assets/13.jpg'
import img14 from '../../Assets/14.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'


const posts = [
  {
    id: 1,
    postImage: img15,
    title: "World Beautiful Nepal, let us travel $ Explore",
    desc: 'The kingdom of Nepal is a muslim country in Asia, with coastlines on the m0st Beautifull and Aventure explore in the world'
  },

  {
    id: 2,
    postImage: img12,
    title: "Romantic moments under eiffel tower",
    desc: 'with vast swaths of desertnin its east and west and the rich Nile River valley at its heart is sitw to one of the world earliest and greatest civilizatons'
  },

  {
    id: 3,
    postImage: img13,
    title: "Let us have an adventure outside Pokhara",
    desc: 'Pokhara is a small City in Nepal that respresents both the aspirations of freedom and struggles against terrorism that roill the region'
  },

  {
    id: 4,
    postImage: img14,
    title: "Best country in East Africa",
    desc: 'When Kenya claimed its independence from the U.k in 1963 leaders ofthe newly formed republice promoted a sense of national unity using the motto'
  },
]
function Blog() {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  
  return (
    <section className='blog container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000"  className="secTitle">
            Our Best Blog.
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500" >An insight to the incredible experince in the world.</p>
        </div>
        <div className="mainContent grid">
          {
            posts.map(({id, postImage, title, desc}) => {
              return (
                <div data-aos="fade-up" data-aos-duration="3000"  className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt="tittle" />
                  </div>
                  <div className="postDetails">
                    <h3>{title}</h3>
                    <p data-aos="fade-up" data-aos-duration="4000" >{desc}
                    </p>
                  </div>
                  <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4500" >
                    Read More
                    <BsArrowRightShort className='icon' />
                  </a>

                </div>
              )
            })
          }

        </div>
      </div>

    </section>
  )
}

export default Blog