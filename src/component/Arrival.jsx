import React from "react";
import arrivel from "../Images/arrival-bg.png";
import { useNavigate } from "react-router-dom";

const Arrival = () => {
  const navigate = useNavigate();
  return (
    <div
      className="arival"
      style={{ backgroundImage: `url(${arrivel})` }}
    >
      <div className="text">
        <h1 className="new">New Arrival</h1>
        <p className="home-text">
          Dignissimos reprehenderit repellendus nobis error quibusdam? Atque<br />
          animi sint unde quis reprehenderit, et, perspiciatis, debitis<br />
          totam est deserunt eius officiis ipsum ducimus ad labore modi<br />
          voluptatibus accusantium sapiente nam! Quaerat.
        </p>
        <button className="btn button ps-5 pe-5 pt-2 pb-2"
        onClick={() => navigate('/product')}

        
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Arrival;
