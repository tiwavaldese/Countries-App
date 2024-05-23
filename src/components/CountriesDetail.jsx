import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const CountriesDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => response.json())
      .then(data => {
        const countryData = data[0];
        const structuredData = {
          flag: countryData.flags?.svg,
          name: countryData.name?.common,
          'native-name': countryData.name?.nativeName,
          population: countryData.population,
          region: countryData.region,
          'sub-region': countryData.subregion,
          capital: countryData.capital?.[0] || 'N/A',
          'border-countries': countryData.borders || [],
          'top-level-domain': countryData.tld?.[0] || '',
          currencies: countryData.currencies,
          languages: countryData.languages,
        };
        setCountry(structuredData);
      })
      .catch(error => console.error('Error fetching country:', error));
  }, [countryName]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`p-5 ${theme === 'light' ? 'bg-light-bg' : 'bg-d-dark'} shadow-lg shadow-opacity-50 mx-auto w-full md:w-[60%] lg:w-[45%]`}>
      <div className={`${theme === 'light' ? 'bg-c-white' : 'bg-m-dark'} shadow-lg shadow-opacity-70 p-5`}>
        <img src={country.flag} alt={`${country.name} flag`} />
        <h2 className='font-bold mt-3 mb-3 text-lg'>{country.name}</h2>
        <p>Native Name: {country['native-name']}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Sub-Region: {country['sub-region']}</p>
        <p>Capital: {country.capital}</p>
        <p>Top Level Domain: {country['top-level-domain']}</p>
        <p>Currencies: {Object.values(country.currencies || {}).map(curr => curr.name).join(', ')}</p>
        <p>Languages: {Object.values(country.languages || {}).join(', ')}</p>
        <p>Border Countries: {country['border-countries'] ? country['border-countries'].join(', ') : 'None'}</p>
      </div>
    </div>
  );
};

export default CountriesDetail;