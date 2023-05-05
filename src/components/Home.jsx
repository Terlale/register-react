import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goRegister = () => {
    navigate("/register");
  };
  const goAdmin = () => {
    navigate("/admin");
  };
  return (
    <div
      style={{
        "background-image": "url(https://wallpaperaccess.com/full/1332262.jpg)",
        width: "100%",
        height: "100vh",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        margin: "0px",
        padding: "0px",
      }}
    >
      <div
        style={{
          "background-color": "#ffffff4d",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            "background-color": "#00000078",
            color: "white",
            padding: "5px",
          }}
        >
          <h1 style={{ "padding-left": "20px" }}>Home</h1>
        </div>
        <div style={{ "text-align": "center", "padding-top": "100px" }}>
          <h1>WELCOME TO OUR WEBSITE</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div style={{ "text-align": "center" }}>
          <button
            onClick={goRegister}
            style={{
              width: "120px",
              height: "40px",
              "border-radius": " 4px",
              border: "none",
              margin: "40px 15px",
              color: "white",
              "background-color": "black",
            }}
          >
            Register
          </button>
          <button
            onClick={goAdmin}
            style={{
              width: "120px",
              height: "40px",
              "border-radius": " 4px",
              border: "none",
              margin: "40px 15px",
              color: "white",
              "background-color": "black",
            }}
          >
            AdminPanel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
