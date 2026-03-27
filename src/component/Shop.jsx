import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa6";
import { GiPodiumWinner } from "react-icons/gi";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">

       
        <h2 className="shop-title">Why Shop With Us</h2>

       
        <div className="shop-cards">

          <div className="shop-card">
            <FaTruck className="shop-icon" />
            <h3>Fast Delivery</h3>
            <p>within 2-3 days at your doorstep</p>
          </div>

          <div className="shop-card">
            <FaAmazon className="shop-icon" />
            <h3>Free Shipping</h3>
            <p>free delivery for every product</p>
          </div>

          <div className="shop-card">
            <GiPodiumWinner className="shop-icon" />
            <h3>Best Quality</h3>
            <p>100% verified best products</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Shop;
