import "./Filter.scss";

// filterYear, setFilterYear
const Filter = (props) => {
  const {
    filterABV,
    filterYear,
    filterHighPh,
    setFilterABV,
    setFilterYear,
    setFilterHighPh,
  } = props;

  const handleAbvChange = () => {
    console.log("filter clicked");
    setFilterABV(!filterABV);
  };

  const handleYearChange = () => {
    console.log("filter clicked");
    setFilterYear(!filterYear);
  };

  const handlePhChange = () => {
    console.log("filter clicked");
    setFilterHighPh(!filterHighPh);
  };

  return (
    <div className="filter">
      <p>High ABV </p>
      <span onClick={handleAbvChange}> ▢ </span>
      <p>Classic Range </p>
      <span onClick={handleYearChange}> ▢ </span>
      <p>High Acidity </p>
      <span onClick={handlePhChange}> ▢ </span>
    </div>
  );
};

export default Filter;
