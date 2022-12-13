import Button from "../Button/Button";
import "./BeerCard.scss";

const BeerCard = ({ name, image, tagline, abv, ph, year }) => {
  return (
    <div className="beerCard">
      <img className="beerImage" src={image} alt={name} />
      <h2 className="beerName">{name}</h2>
      <div className="beerText">
        <p>{tagline}</p>
        <ul>
          <span className="beerHeading">ABV: </span>
          {abv}%
        </ul>
        <ul>
          <span className="beerHeading">pH: </span>
          {ph}
        </ul>
        <ul>
          <span className="beerHeading">Year: </span>
          {year}
        </ul>
      </div>
      <Button buttonText="More Info" />
    </div>
  );
};
export default BeerCard;
