import "./App.scss";
// import NavBar from "./containers/NavBar/NavBar";
import CardList from "./containers/CardList/CardList";
import NavBar from "./containers/NavBar/NavBar";
import { useEffect, useState } from "react";

// import beers from "./data/beers";

const App = () => {
  //Name Search
  const [searchTerm, setSearchTerm] = useState("");
  //API - Beer
  const [beers, setBeers] = useState();
  console.log(beers);

  const getAllBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <>
      <p> Testing </p>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {beers && <CardList beers={beers} searchTerm={searchTerm} />}
    </>
  );
};

export default App;
