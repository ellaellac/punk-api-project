import "./BeerCard.scss";

const BeerCard = ({ name, image, abv, ph, year }) => {
  return (
    <div className="beerCard">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{abv}</p>
      <p>{ph}</p>
      <p>{year}</p>
    </div>
  );
};
export default BeerCard;
