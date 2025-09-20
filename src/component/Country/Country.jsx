import React from "react";

const Country = ({ country }) => {
  return (
    <div className="country-card">
      <img className="country-image" src={country.flags.flags.png} alt="" />
      <h1 className="title">Name: {country.name.common}</h1>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area}</p>
      <div className="btn-container">
        <button>Not Visited</button>
        <button>Add Flag to Visited</button>
      </div>
    </div>
  );
};

export default Country;
