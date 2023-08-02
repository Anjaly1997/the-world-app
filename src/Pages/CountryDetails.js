import React from 'react';
import {useParams} from 'react-router-dom'

function CountryDetails(props) {
    const {countryCode} = useParams();
  return (
    <div>
        Deatils of the country
        {console.log(countryCode)};
    </div>
  )
}

export default CountryDetails