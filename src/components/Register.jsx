import React, { useContext } from "react";
import { MainContext } from "../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const goAdmin = () => {
    navigate("/admin");
  };

  const {
    name,
    setName,
    surname,
    setSurname,
    number,
    setNumber,
    card,
    setCard,
  } = useContext(MainContext);

  const sendData = () => {
    axios
      .post(
        `https://645477e6f803f3457629797d.mockapi.io/register/admin/register`,
        {
          name,
          surname,
          number,
          card,
        }
      )
      .then((res) => {
        console.log(res.data);
      });
    setName("");
    setSurname("");
    setNumber("");
    setCard("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#eee",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "70px",
          borderRadius: "20px",
          width: "30%",
          height: "48%",
        }}
      >
        <h1>Register</h1>
        <input
          style={{ width: "60%", height: "10%", marginBottom: "10px" }}
          placeholder="Ad"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ width: "60%", height: "10%", marginBottom: "10px" }}
          placeholder="Soyad"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          style={{ width: "60%", height: "10%", marginBottom: "10px" }}
          placeholder="Nömrə"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          style={{ width: "60%", height: "10%", marginBottom: "10px" }}
          placeholder="xxxx xxxx xxxx xxxx"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />
        <button
          type="submit"
          onClick={sendData}
          style={{
            width: "62%",
            height: "12%",
            color: "white",
            backgroundColor: "blue",
            border: "none",
            "border-radius":"7px"
          }}
        >
          Submit
        </button>
        <button
          type="submit"
          onClick={goAdmin}
          style={{
            width: "62%",
            height: "12%",
            color: "black",
            backgroundColor: "#0001",
            border: "none",
           "border-radius":"7px",
           "margin-top":"10px"
          }}
        >
          Go Admin Panel
        </button>
      </div>
    </div>
  );
};

export default Register;
