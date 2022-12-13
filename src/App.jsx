import "./App.scss";
// import NavBar from "./containers/NavBar/NavBar";
import CardList from "./containers/CardList/CardList";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

import beers from "./data/beers";

console.log(beers);

const App = () => {
  //Name Search
  const [serachTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    return setSearchTerm(userInput);
  };

  const filteredBeerCards = beers.filter((beer) => {
    const lowerCaseName = beer.name.toLowerCase();
    return lowerCaseName.includes(serachTerm);
  });

  return (
    <>
      <p> Testing </p>
      <SearchBar
        label="Search Name"
        serachTerm={serachTerm}
        handleInput={handleInput}
      />
      <CardList beersArr={filteredBeerCards} />
    </>
  );
};

export default App;
