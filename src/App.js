import CountryCard from "./Components/CountryCards";
import './App.css'
import { useEffect, useState } from "react";
import { getAllCountries } from "./Services";
function App() {
  const [countriesList,setCountriesList] = useState([]);
  useEffect(()=>{
  getAllCountries().then(result =>{
  const countries = result.data;
  setCountriesList(countries); 
  console.log(result.data);
  });
  },[]);

  return (
    <div className="App">
     <div className="country-card-wrapper">
      {countriesList.map(country=>
      <CountryCard 
      name = {country.name.common}
      capital = {country.capital}
      population = {country.population}
      flagUrl = {country.flags.png}
      key = {country.cca2}
     />
    )}
     
     </div>
    </div>
  );
}

export default App;
