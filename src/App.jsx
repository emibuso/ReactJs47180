import React, { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";


const App = () => {
  
  const [number, setNumber] = useState();

  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <div className="UserSection">
      </div>
      
    </div>
  );
};

export default App;
