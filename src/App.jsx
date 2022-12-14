import "./App.scss";
// import NavBar from "./containers/NavBar/NavBar";
import CardList from "./containers/CardList/CardList";
import NavBar from "./containers/NavBar/NavBar";
import { useEffect, useState } from "react";

// import beers from "./data/beers";

const App = () => {
  //Filter
  const [filterABV, setFilterABV] = useState(false);
  const [filterYear, setFilterYear] = useState(false);
  const [filterHighPh, setFilterHighPh] = useState(false);

  //Name Search
  const [searchTerm, setSearchTerm] = useState("");
  //API - Beer
  const [beers, setBeers] = useState();

  const getAllBeers = async (filterABV, filterYear) => {
    let url = "https://api.punkapi.com/v2/beers?";
    if (filterABV) {
      url += "abv_gt=6&";
    }
    if (filterYear) {
      url += "brewed_before=01-2010&";
    }
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  useEffect(() => {
    getAllBeers(filterABV, filterYear);
  }, [filterABV, filterYear]);

  return (
    <>
      <p> Testing </p>
      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterABV={filterABV}
        setFilterABV={setFilterABV}
        filterYear={filterYear}
        setFilterYear={setFilterYear}
        filterHighPh={filterHighPh}
        setFilterHighPh={setFilterHighPh}
      />
      {beers && <CardList beers={beers} searchTerm={searchTerm} />}
    </>
  );
};

export default App;
