import "./FilterList.scss";
import Filter from "../../components/Filter/Filter";

const FilterList = (props) => {
  const {
    filterABV,
    filterYear,
    filterLowPh,
    setFilterABV,
    setFilterYear,
    setFilterLowPh,
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
    setFilterLowPh(!filterLowPh);
  };

  return (
    <>
      <Filter title="High ABV >6%" handleChange={handleAbvChange} />
      <Filter title="Classic Range" handleChange={handleYearChange} />
      <Filter title="High Acidity (pH <4)" handleChange={handlePhChange} />
    </>
  );
};

export default FilterList;
