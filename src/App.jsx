import "./App.scss";
// import NavBar from "./containers/NavBar/NavBar";
import CardList from "./containers/CardList/CardList";
import NavBar from "./containers/NavBar/NavBar";
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

  //useEffect
  useEffect(() => {
    getAllBeers(filterABV, filterYear);
  }, [filterABV, filterYear]);

  return (
    <>
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
    </>
  );
};

export default App;
