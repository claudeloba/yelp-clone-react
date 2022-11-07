import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";

function App() {
  return (
    <div className="App">
      <h1>Ravenous Restaurant Finder</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
