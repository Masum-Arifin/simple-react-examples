import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import './components/Countries/Countries.css'

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);

//   useEffect( () =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=> setCountries(data))
//   }, [])

//   return(
//     <div>
//       <h1>Visiting Every country of the world!!</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} region={country.region} time={country.timezones}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//      <h4>Region: {props.region}</h4>
//      <h4>Population: {props.population}</h4>
//      <h4>Time: {props.timezones}</h4>
//      <h4>Postal: {props.postalCode}</h4>
//     </div>
//   )
// }


export default App;

