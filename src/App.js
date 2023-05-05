import React from "react";
import Router from "./router/Router";
import { MainContext } from "./context/Context";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [card, setCard] = useState("");
  const [db, setDb] = useState([]);

  const data = {
    name,
    surname,
    number,
    card,
    setName,
    setSurname,
    setNumber,
    setCard,
    db,
    setDb,
  };

  return (
    <div>
      <MainContext.Provider value={data}>
        <Router />
      </MainContext.Provider>
    </div>
  );
};

export default App;
