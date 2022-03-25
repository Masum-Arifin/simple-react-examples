import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/country';


const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },)
    return (
        <div>
            <h1>Hello from Countries countries: {countries.length}</h1>
            {
                countries.map(country => console.log(''))
            }
            {
                countries.map(country => <Country name={country.name.common}></Country>)
            }
        </div>
    );
};

export default Countries;