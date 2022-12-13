import "./CardList.scss";
import BeerCard from "../../components/BeerCard/BeerCard";

const CardList = ({ beers, searchTerm }) => {
  const filteredBeerCards = beers.filter((beer) => {
    const lowerCaseName = beer.name.toLowerCase();
    return lowerCaseName.includes(searchTerm);
  });

  const beerCardJsx = filteredBeerCards.map((beer) => {
    return (
      <BeerCard
        key={beer.id}
        tagline={beer.tagline}
        image={beer.image_url}
        name={beer.name}
        abv={beer.abv}
        ph={beer.ph}
        year={beer.first_brewed}
        description={beer.description}
        food={beer.food_pairing}
      />
    );
  });

  return <div className="cardList">{beerCardJsx}</div>;
};

export default CardList;
