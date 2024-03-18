import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Homepage");
  };

  return (
    <div style={{textAlign: "center", display: "grid", placeItems:"center", marginTop: "12%"}} className="login-wrapper">
      <h1 style={{fontSize: "60px"}}>Please Log In</h1>
      <br />
      <form style={{fontSize:"30px"}} onSubmit={handleSubmit}>
        <label>
          Username
          <br/>
          <input type="text" />
        </label>
        <br />
        <label>
        Password
          <br/>
          <input type="password" />
        </label>
        <br />
        <div style={{marginTop: "20px"}}>
          <button className="btn btn-success btn-lg" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;