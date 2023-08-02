import CountryCard from "../Components/CountryCards";
import './Home.css'
import { useEffect, useState } from "react";
import { getAllCountries } from "../Services";
function App() {
  const [countriesList,setCountriesList] = useState([]);
  useEffect(()=>{
  getAllCountries().then(result =>{
  const countries = result.data;
  setCountriesList(countries); 
  });
  },[]);

  return (
    <div className="App">
     <div className="country-card-wrapper">
      {countriesList.map(country=>
      <CountryCard 
      name = {country.name.official}
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
