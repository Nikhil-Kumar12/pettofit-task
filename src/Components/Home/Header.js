import React from "react";
import logo from "../../Utilities/logo.jpg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Login from "../DialogComponent/Login";
import SignUp from "../DialogComponent/Signup";
import "../../CSS/Header.css";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Header = () => {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignUp] = React.useState(false);

  const handleClickLoginOpen = () => {
    setOpenLogin(true);
  };
  const handleLoginClose = () => {
    setOpenLogin(false);
  };
  const handleClickSignUpOpen = () => {
    setOpenSignUp(true);
  };
  const handleSignupClose = () => {
    setOpenSignUp(false);
  };

  return (
    <div className="navbar">
      <div className="logo" data-aos="fade-right" data-aos-duration="750">
        <img src={logo} alt="" />
      </div>
      <div className="login" data-aos="fade-left" data-aos-duration="750">
        <Button variant="text" onClick={handleClickLoginOpen}>
          Log In
        </Button>
        <Button variant="text" onClick={handleClickSignUpOpen}>
          Sign Up
        </Button>
        <Dialog open={openLogin} onClose={handleLoginClose}>
          <Login handleLoginClose={handleLoginClose} />
        </Dialog>
        <Dialog open={openSignup} onClose={handleSignupClose}>
          <SignUp handleSignUpClose={handleSignupClose} />
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
