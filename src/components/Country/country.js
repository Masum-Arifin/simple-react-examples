import React from "react";
import './Country.css'

const Country = (props) => {
    const {area, region, name, population, timezones, flags, maps}= props.country;
  return (
    <div className="country">
        <h2>Name: {name.common}</h2>
        <img src={flags.png} alt="" />
        <p>Area: {area}</p>
        <p><small>Region: {region}</small></p>
        <p><small>Population: {population}</small></p>
        <p><small>TimeZone: {timezones}</small></p>
        <p><small>Maps : {maps.googleMaps}</small></p>
      {/* <h2>
        Country Name: {props.name} 
      </h2>
      <p>population: {props.population}</p>
      <p><small>Area: {props.area}</small></p>
      <p><small>Region: {props.region}</small></p> */}
    </div>
  );
};

export default Country;
