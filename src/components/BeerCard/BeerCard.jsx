import "./BeerCard.scss";

const BeerCard = ({ name, image, abv, ph, year }) => {
  return (
    <div className="beerCard">
      <img className="beerImage" src={image} alt={name} />
      <h2 className="beerName">{name}</h2>
      <div className="beerText">
        <p>
          <span className="beerHeading">ABV: </span>
          {abv}%
        </p>
        <p>
          <span className="beerHeading">pH: </span>
          {ph}
        </p>
        <p>
          <span className="beerHeading">Year: </span>
          {year}
        </p>
      </div>
    </div>
  );
};
export default BeerCard;
