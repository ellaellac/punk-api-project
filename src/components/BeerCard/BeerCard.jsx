import Button from "../Button/Button";
import "./BeerCard.scss";
import whiteCross from "../../assets/white-cross.png";
import { useState } from "react";

const BeerCard = (props) => {
  const { name, image, tagline, abv, ph, year, description, food } = props;

  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const buttonJSX = (
    <div onClick={handleClick}>
      <Button buttonText="More Info" />
    </div>
  );

  const moreInfoJSX = (
    <div className="beerCard__info">
      <img
        className="beerCard__cross"
        onClick={handleClick}
        src={whiteCross}
        alt="white-cross"
      />
      <h3 className="beerCard__heading">Description</h3>
      <p>{description}</p>
      <h3 className="beerCard__heading">Food Pairing</h3>
      {food.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );

  return (
    <div className="beerCard">
      <img className="beerCard__image" src={image} alt={name} />
      <h2 className="beerCard__name">{name}</h2>
      <div className="beerCard__text">
        <p>{tagline}</p>
        <ul>
          <span className="beerCard__heading">ABV: </span>
          {abv}%
        </ul>
        <ul>
          <span className="beerCard__heading">pH: </span>
          {ph}
        </ul>
        <ul>
          <span className="beerCard__heading">Year: </span>
          {year}
        </ul>
      </div>
      {showText ? moreInfoJSX : buttonJSX}
    </div>
  );
};
export default BeerCard;
