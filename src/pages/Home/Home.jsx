import React from 'react'
import hero_image from '../../assets/banner_image.jpg'
import hero_title from '../../assets/movie-title.jpeg'

import { Info, Play } from 'lucide-react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Titlecard from '../../components/Titlecard/Titlecard'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <div className="hero">
        <img src={hero_image} alt="" className='banner_img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>ames is a 2022 Indian Kannada -language action thriller film directed by Chethan Kumar and produced by Kishore Pathikonda under Kishore Productions. </p>
          <div className="hero-btns">
            <button className='btn'><Play size={18}></Play>Paly</button>
            <button className='btn dark-btn'><Info size={18}></Info>More Info</button>
          </div>
          <div className="title-cards">          <Titlecard className="title-cards" category={"now_playing"} />
          </div>

        </div>

      </div>

      <div className="more-cards">
        <Titlecard title={"Blockbuster Movies"} category={"top_rated"} />
        <Titlecard title={"Only On Netflix"} category={"popular"} />
        <Titlecard title={"Upcomming"} category={"upcoming"} />
        <Titlecard title={"Top Pics for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
