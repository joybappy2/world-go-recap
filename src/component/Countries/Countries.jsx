import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countriesArray = countriesData.countries;

  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country]
    setVisitedCountry(newVisitedCountry)
  }

  return (
    <>
      <h1 className="big-title">All Countries</h1>
      <p>Total Visit: { visitedCountry.length }</p>
      <ol>
        {
          visitedCountry.map( ( country, idx ) => {
            return <div className="flex" key={ idx }>
              <li className="lic" >{ country.name.common } </li>
              <img className="sm-img" src={country.flags.flags.png} alt="" />
            </div>
          })
        }
      </ol>
      <div className="container">
        {countriesArray.map((country, idx) => {
          return <Country key={idx} country={country} handleVisitedCountry={handleVisitedCountry}></Country>;
        })}
      </div>
    </>
  );
};

export default Countries;
