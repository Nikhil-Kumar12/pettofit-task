import React from "react";
import Button from "@mui/material/Button";
import Header from "./Header";
import "../../CSS/Landing.css";

const Landing = () => {
  return (
    <div className="container">
      <Header />
      <div className="catch-line">
        <h1 data-aos="zoom-in-up" data-aos-duration="750">
          Meet your routine, <br /> reinvented
        </h1>
        <p data-aos="zoom-in-down" data-aos-duration="750">
          A Different Kind Of Company with different idea
          <br />
          And A Different Kind Of shop.
        </p>
      </div>
      <Button variant="contained" data-aos="zoom-out" data-aos-duration="1200">
        Shop Now
      </Button>
    </div>
  );
};

export default Landing;
