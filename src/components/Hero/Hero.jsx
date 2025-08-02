import React from 'react'

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay"; 

import styles from './Hero.module.css'

const slider = [
{title: "Devi Kusumasana",
  description: "Devi Kusumasana, a 2025 Sri Lankan historical drama by Jayantha Chandrasiri, follows his acclaimed films *Maharaja Gemunu* and *Midunu Vishwaya",
  url: "./1_DeviKusumasana.jpg",},

  {title: "Valampuri",
  description: "Valampoori (1981) is a Sinhala film starring Vijaya Kumaranatunga and Geetha Kumarasinghe, directed by Bermin Lylie Fernando—classic Sri Lankan cinema romance and drama",
  url: "/2_Valampuri.jpg",},

  {title: "Baagi",
  description: "Baaghi, a 2016 Hindi action-romance starring Tiger Shroff and Shraddha Kapoor, follows a martial artist’s dangerous mission to rescue his kidnapped love",
  url: "/3_Baagi.jpg",},

  {title: "Dragon",
  description: "How to Train Your Dragon follows Hiccup, a young Viking, who befriends a dragon, challenging tradition and uniting humans and dragons through friendship",
  url: "/4_Dragon.jpg",},

  {title: "Clarance",
  description: "Rhythm of the Guitar: Clarence is a biographical musical film portraying Clarence Wijewardena’s pioneering journey in Sinhala pop music via the electric guitar",
  url: "/5_Clarance.jpg",},

  
]

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div>
        <div className={styles['carousel-content']}>
          <span>discover</span>
          <h1>Ongoing Films</h1>
          <hr />
          <p>
           Experience the latest blockbusters and local favorites on the big screen. Stay entertained with movies that everyone is talking about!
          </p>
          <Link to="/movie" className={styles['slider-btn']}>
            View All Movies
          </Link>
        </div>
      </div>

      <Swiper 
      className='myswiper'
      modules={[Pagination, EffectCoverflow, Autoplay]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:3,
        slideShadows: true
      }}
      loop={true}
      pagination={{clickable: true}}
      
      autoplay={{
        delay:5000,
        disableOnInteraction: false
      }}
      breakpoints={{
        640:{
          slidesPerView: 2
        },
        768:{
          slidesPerView: 1
        },
        1024:{
          slidesPerView: 2
        },
        1560:{
          slidesPerView: 3
        }
      }}
      >
        {
          slider.map(data => (
            <SwiperSlide style = {{ backgroundImage: `url(${data.url})`}} className='myswiper-slider'>
              
              <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <a href={`${data.url}`} target="_blank" className={styles ['slider-btn']}>book here</a>
              </div>

            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Hero;