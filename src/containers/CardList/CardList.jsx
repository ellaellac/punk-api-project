import "./CardList.scss";
import BeerCard from "../../components/BeerCard/BeerCard";

const CardList = ({ beersArr }) => {
  //Beer Card
  const beerCardJsx = beersArr.map((beer) => {
    return (
      <BeerCard
        key={beer.id}
        name={beer.name}
        image={beer.image_url}
        abv={beer.abv}
        ph={beer.ph}
        year={beer.first_brewed}
      />
    );
  });

  return <div className="cardList">{beerCardJsx}</div>;
};

export default CardList;
