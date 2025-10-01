import React, { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);

  // console.log(visitCountHandler)
  const visitedCountryHandler = () => {
    const newVisited = !visited;
    // console.log(newVisited);
    setVisited( newVisited );
    handleVisitedCountry(country)
  };

  return (
    <div className="country-card">
      <img className="country-image" src={country.flags.flags.png} alt="" />
      <h1 className="title">Name: {country.name.common}</h1>
      <p>Population: {country.population.population}</p>
      <p>Continents: {country.continents.continents}</p>
      <div className="btn-container">
        <button className={`${visited && 'visited-btn'}`} onClick={visitedCountryHandler}>
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button>Add Flag to Visited</button>
      </div>
    </div>
  );
};

export default Country;
