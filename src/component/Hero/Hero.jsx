import React from 'react'
import './Hero.css'
import col from '../../assets/col-md-6.png'

const Hero = () => {
  return (
    <div>
     <div className="container">
      <div className="hero">
        <div className="hero_left">
    <p>Welcome</p>
    <h1>Best Learning <br/> Opportunities</h1>
    <h3>Our goal is to make online <br/> education work for everyone</h3>
    <button className="button2">JOIN US</button>
    <button className="button3">Learn More</button>
        </div>
        <div className="hero_right">
          <img  src={col} alt="" />

        </div>
      </div>
     </div>
    </div>
  )
}

export default Hero
