import "./SearchBar.scss";

const SearchBox = ({ label, handleInput }) => {
  return (
    <form className="Search-box">
      <label htmlFor={label}>{label} : </label>
      <input onInput={handleInput} type="text" />
    </form>
  );
};

export default SearchBox;
