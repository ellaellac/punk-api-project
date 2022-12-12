import "./App.scss";
import beers from "./data/beers";
import BeerCard from "./components/BeerCard/BeerCard";

console.log(beers);

const App = () => {
  const beerCardJsx = beers.map(
    ({ id, name, image_url, abv, ph, first_brewed }) => {
      return (
        <BeerCard
          key={id}
          name={name}
          image={image_url}
          abv={abv}
          ph={ph}
          year={first_brewed}
        />
      );
    }
  );

  return (
    <>
      <p> Testing </p>
      <div className="cardList">{beerCardJsx}</div>;
    </>
  );
};

export default App;
