import "./NavBar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";

const NavBar = (props) => {
  const {
    searchTerm,
    setSearchTerm,
    filterABV,
    setFilterABV,
    filterYear,
    setFilterYear,
    filterHighPh,
    setFilterHighPh,
  } = props;

  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    return setSearchTerm(userInput);
  };

  return (
    <div>
      <SearchBar
        label="Search Name"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <Filter
        filterABV={filterABV}
        setFilterABV={setFilterABV}
        filterYear={filterYear}
        setFilterYear={setFilterYear}
        filterHighPh={filterHighPh}
        setFilterHighPh={setFilterHighPh}
      />
    </div>
  );
};

export default NavBar;
