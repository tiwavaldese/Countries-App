import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';
import Flags from './Flags';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const structuredData = data.map(country => ({
          flag: country.flags?.svg,
          name: country.name?.common,
          population: country.population,
          region: country.region,
          capital: country.capital?.[0] || 'N/A',
        }));
        setCountries(structuredData);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const filterCountries = countries.filter((country) => {
    const searchCountryMatch = country.name.toLowerCase().includes(searchCountry.toLowerCase());
    const filterRegionMatch = filterRegion === '' || country.region.toLowerCase() === filterRegion.toLowerCase();
    return searchCountryMatch && filterRegionMatch;
  });

  const handleCountryClick = (country) => {
    navigate(`/country/${country.name}`);
  };

  return (
    <>
      <SearchInput
        theme={theme}
        setSearchCountry={setSearchCountry}
        setFilterRegion={setFilterRegion}
      />
      <Flags
        theme={theme}
        countries={filterCountries}
        onCountryClick={handleCountryClick}
      />
    </>
  );
};

export default Home;