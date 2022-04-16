import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../CSS/Dialog.css";

const SignUp = ({ handleSignUpClose }) => {
  return (
    <div className="dialog" data-aos="zoom-in-down" data-aos-duration="750">
      <div className="dialog-heading">SignUp</div>
      <div className="dialog-form">
        <TextField id="outlined-info" label="Name" variant="outlined" />
        <TextField id="outlined-info" label="Email" variant="outlined" />
        <TextField id="outlined-info" label="User Name" variant="outlined" />
        <TextField id="outlined-pass" label="Password" variant="outlined" type="password" />
        <TextField id="outlined-pass" label="Confirm Password" variant="outlined" type="password" />
      </div>
      <div className="dialog-buttons">
        <Button variant="outlined" color="error" onClick={handleSignUpClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSignUpClose}>
          SignUp
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
