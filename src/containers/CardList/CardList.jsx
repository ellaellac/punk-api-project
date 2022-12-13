import "./CardList.scss";
import BeerCard from "../../components/BeerCard/BeerCard";

const CardList = ({ beers, serachTerm }) => {
  const filteredBeerCards = beers.filter((beer) => {
    const lowerCaseName = beer.name.toLowerCase();
    return lowerCaseName.includes(serachTerm);
  });

  const beerCardJsx = filteredBeerCards.map((beer) => {
    return (
      <BeerCard
        key={beer.id}
        image={beer.image_url}
        name={beer.name}
        abv={beer.abv}
        ph={beer.ph}
        year={beer.first_brewed}
      />
    );
  });

  return <div className="cardList">{beerCardJsx}</div>;
};

export default CardList;
