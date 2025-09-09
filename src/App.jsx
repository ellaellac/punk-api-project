import "./App.scss";
// import NavBar from "./containers/NavBar/NavBar";
import CardList from "./containers/CardList/CardList";
import NavBar from "./containers/NavBar/NavBar";
import BeerLogo from "./assets/beerlogo.png";
import { useEffect, useState } from "react";

const App = () => {
  //Filter
  const [filterABV, setFilterABV] = useState(false);
  const [filterYear, setFilterYear] = useState(false);
  const [filterLowPh, setFilterLowPh] = useState(false);

  //Name Search
  const [searchTerm, setSearchTerm] = useState("");
  //API - Beer
  const [beers, setBeers] = useState();

  const getAllBeers = async (filterABV, filterYear) => {
    let allBeersArr = [];
    for (let i = 1; i < 6; i++) {
      let url = `https://punkapi.online/v3/beers?page=${i}&per_page=80&`;
      if (filterABV) {
        url += "abv_gt=6&";
      }
      if (filterYear) {
        url += "brewed_before=01-2010&";
      }
      const response = await fetch(url);
      const data = await response.json();
      allBeersArr = allBeersArr.concat(data);
    }
    console.log(allBeersArr);
    setBeers(allBeersArr);
  };

  //useEffect
  useEffect(() => {
    getAllBeers(filterABV, filterYear);
  }, [filterABV, filterYear]);

  return (
    <div className="app">
      <div className="header">
        <img className="header__img" src={BeerLogo} alt="Beer Logo" />
        <h1> Our Beers </h1>
      </div>
      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterABV={filterABV}
        setFilterABV={setFilterABV}
        filterYear={filterYear}
        setFilterYear={setFilterYear}
        filterLowPh={filterLowPh}
        setFilterLowPh={setFilterLowPh}
      />
      {beers && (
        <CardList
          beers={beers}
          searchTerm={searchTerm}
          filterLowPh={filterLowPh}
        />
      )}
    </div>
  );
};

export default App;
