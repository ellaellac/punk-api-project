import "./SearchBar.scss";

const SearchBox = ({ label, searchTerm, handleInput }) => {
  return (
    <form className="search-box">
      <label className="search-box__title" htmlFor={label}>
        {label} :{" "}
      </label>
      <input
        className="search-box__input"
        onInput={handleInput}
        value={searchTerm}
        type="text"
      />
    </form>
  );
};

export default SearchBox;
