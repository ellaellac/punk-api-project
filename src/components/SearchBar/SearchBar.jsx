import "./SearchBar.scss";

const SearchBox = ({ label, searchTerm, handleInput }) => {
  return (
    <form className="Search-box">
      <label htmlFor={label}>{label} : </label>
      <input onInput={handleInput} value={searchTerm} type="text" />
    </form>
  );
};

export default SearchBox;
