import React from "react";
import "../styles/app.css";
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <img src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" className="nasaLogo" s/>
      <Search />
    </div>
  );
}

export default App;
