import "./Filter.scss";

const Filter = (props) => {
  const { title, handleChange } = props;

  return (
    <div className="filter">
      <p className="filter__title">{title}</p>
      <input type="checkbox" className="filter__box" onChange={handleChange} />
    </div>
  );
};

export default Filter;
