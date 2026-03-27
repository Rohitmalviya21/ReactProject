import React from 'react'
import slider from '../Images/slider-bg.jpg'
import Arrival from '../component/Arrival'
import Shop from '../component/Shop'
import Product from '../component/Product'
import Discount from './Discount'
import Footer from '../component/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero">
        <img src={slider} alt="slider" className="hero-img" />

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="offer">20% Off</h1>
            <h1 className="title">On Top Brands</h1>
            <p>
              If you would like to experience the best of online shopping for men,
              women and kids in India, you are at the right place. Famms is the
              ultimate destination for fashion and lifestyle, being host to a wide
              array of merchandise including clothing, footwear,and more.
            </p>
            <button className="hero-btn"
            onClick={()=>navigate('/product')}
            
            >Shop Now</button>
          </div>
        </div>
      </div>
      <Shop/>
      <Arrival/>
      <Product/>
      <Discount/>
     


    </>
  )
}

export default Home