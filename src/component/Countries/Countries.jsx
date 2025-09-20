import { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countriesArray = countriesData.countries;
  console.log(countriesArray);

  return (
    <div className="container">
      {countriesArray.map((country, idx) => {
        return <Country key={idx} country={country}></Country>;
      })}
    </div>
  );
};

export default Countries;
