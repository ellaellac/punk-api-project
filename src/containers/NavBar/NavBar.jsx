import "./NavBar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterList from "../FilterList/FilterList";

const NavBar = (props) => {
  const {
    searchTerm,
    setSearchTerm,
    filterABV,
    setFilterABV,
    filterYear,
    setFilterYear,
    filterLowPh,
    setFilterLowPh,
  } = props;

  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    return setSearchTerm(userInput);
  };

  return (
    <div className="navBar">
      <SearchBar
        label="Search Beer"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <div className="navBar__filterList">
        <FilterList
          filterABV={filterABV}
          setFilterABV={setFilterABV}
          filterYear={filterYear}
          setFilterYear={setFilterYear}
          filterLowPh={filterLowPh}
          setFilterLowPh={setFilterLowPh}
        />
      </div>
    </div>
  );
};

export default NavBar;
