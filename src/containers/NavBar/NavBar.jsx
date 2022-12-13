import "./NavBar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

const NavBar = ({ setSearchTerm }) => {
  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    return setSearchTerm(userInput);
  };

  return <SearchBar label="Search Name" handleInput={handleInput} />;
};

export default NavBar;
