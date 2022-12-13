import "./App.scss";
// import NavBar from "./containers/NavBar/NavBar";
import CardList from "./containers/CardList/CardList";
import NavBar from "./containers/NavBar/NavBar";
import { useState } from "react";

import beers from "./data/beers";

console.log(beers);

const App = () => {
  //Name Search
  const [serachTerm, setSearchTerm] = useState("");

  return (
    <>
      <p> Testing </p>
      <NavBar setSearchTerm={setSearchTerm} />
      <CardList beers={beers} serachTerm={serachTerm} />
    </>
  );
};

export default App;
