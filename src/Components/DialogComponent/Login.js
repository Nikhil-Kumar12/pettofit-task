import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../CSS/Dialog.css";

const Login = ({ handleLoginClose }) => {
  return (
    <div className="dialog" data-aos="zoom-in-down" data-aos-duration="750">
      <div className="dialog-heading">Login</div>
      <div className="dialog-form">
        <TextField id="outlined-info" label="Email or username" variant="outlined" />
        <TextField id="outlined-pass" label="Password" variant="outlined" type="password" />
      </div>
      <div className="dialog-buttons">
        <Button variant="outlined" color="error" onClick={handleLoginClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleLoginClose}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
