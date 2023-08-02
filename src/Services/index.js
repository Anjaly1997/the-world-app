import axios from 'axios';
const COUNTRY_API_ENDPOINT = 'https://restcountries.com/v3.1';

export function getAllCountries (){
    // call API and get the result
return axios.get(`${COUNTRY_API_ENDPOINT}/all`);
     
}

export function getCountryDetails(countryCode){
    return axios.get(`${COUNTRY_API_ENDPOINT}/aplha/${countryCode}`)
}