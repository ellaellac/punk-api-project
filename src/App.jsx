import "./App.scss";
// import NavBar from "./containers/NavBar/NavBar";
import CardList from "./containers/CardList/CardList";
import NavBar from "./containers/NavBar/NavBar";
import { useState } from "react";

import beers from "./data/beers";

console.log(beers);

const App = () => {
  //Name Search
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <p> Testing </p>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CardList beers={beers} searchTerm={searchTerm} />
    </>
  );
};

export default App;
