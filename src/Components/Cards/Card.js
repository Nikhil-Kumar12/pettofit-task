import React from "react";
import Button from "@mui/material/Button";
import Bag from "../../Utilities/backpack.png";
import "../../CSS/Card.css";

const Card = () => {
  return (
    <div className="products" data-aos="flip-left" data-aos-duration="1200">
      {/* <p>Products</p> */}
      <div className="item-container">
        <div className="item-heading">Bags</div>
        <div className="item-img">
          <img src={Bag} alt="" />
        </div>
        <div className="item-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, alias debitis nostrum omnis, ut maiores
          iusto architecto porro neque quas amet! Quidem odio fugiat expedita ea ullam.
        </div>
        <Button variant="contained">Buy Now</Button>
      </div>
    </div>
  );
};

export default Card;
