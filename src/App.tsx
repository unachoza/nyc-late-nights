import React from "react";
import Map from "./Components/Map/map.component";
import Form from "./Components/Form/form.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Map of NYC Late Nights Spots</header>
      <Form />
      <Map />
    </div>
  );
}

export default App;
