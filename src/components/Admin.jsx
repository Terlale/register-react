import React, { useEffect } from "react";
import { MainContext } from "../context/Context";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate()

    const goHome = () =>{
        navigate("/")
    }
  const { db, setDb } = useContext(MainContext);

  useEffect(() => {
    axios
      .get(
        "https://645477e6f803f3457629797d.mockapi.io/register/admin/register"
      )
      .then((response) => {
        setDb(response.data);
      });
  });
  return (
    <div>
      <div
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "10px 40px",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
        }}
      >
        <div>
          <h1>Admin Panel</h1>
        </div>
        <div>
          <h3 onClick={goHome}>Home</h3>
        </div>
      </div>
      <div style={{ backgroundColor: "#f2f2f2", margin: "0" }}>
        {db.map((item, index) => (
          <div
            style={{
              padding: "20px",
              width: "33%",
              backgroundColor: "white",
              borderRadius: "8px",
              margin: "20px",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.4)",
              marginTop: index === 0 ? 0 : "20px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Ad: <span style={{ color: "#4CAF50" }}>{item.name}</span>
            </p>
            <p style={{ marginBottom: "10px", color: "#333" }}>
              Soyad: <span style={{ color: "#4CAF50" }}>{item.surname}</span>
            </p>
            <p style={{ marginBottom: "10px", color: "#333" }}>
              Əlaqə nömrəsi:{" "}
              <span style={{ color: "#4CAF50" }}>{item.number}</span>
            </p>
            <p style={{ marginBottom: "10px", color: "#333" }}>
              Kart: <span style={{ color: "#4CAF50" }}>{item.card}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
