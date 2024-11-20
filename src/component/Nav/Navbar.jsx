import React from 'react'
import './Navbar.css'
import Img1 from '../../assets/Vector.png'

const Navbar = () => {
  return (
    <div>
      <section>
        <div className="container">
        <div className="nav">
          <h1>Brandname</h1>
          <div className="menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <h3>Login</h3>
          <div className="button1">
            <button>JOIN US </button>
          </div>

        </div>
        </div>
      </section>
    
    </div>
  )
}

export default Navbar
