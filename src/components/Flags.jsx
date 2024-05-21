import React, { useEffect, useState } from 'react';
import Germainflag from '../assets/Germain-flag.png';
import USAflag from '../assets/USA-flag.png';
import Brazilflag from '../assets/Brazil-flag.png';
import Icelandflag from '../assets/Iceland-flag.png';
import Afghanistanflag from '../assets/Afghanistan-flag.png';
import AlandIslandsflag from '../assets/AlandIslands-flag.png';
import Albaniaflag from '../assets/Albania-flag.png';
import Algeriaflag from '../assets/Algeria-flag.png';
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import SearchInput from './SearchInput';

const initialCountries = [
  { flag: Germainflag, name: 'Germany', population: 81770900, region: 'Europe', capital: 'Berlin' },
  { flag: USAflag, name: 'United States of America', population: 323947000, region: 'Americas', capital: 'Washington, D.C' },
  { flag: Brazilflag, name: 'Brazil', population: 206135893, region: 'Americas', capital: 'Brasilia' },
  { flag: Icelandflag, name: 'Iceland', population: 334300, region: 'Europe', capital: 'Reykjavik' },
  { flag: Afghanistanflag, name: 'Afghanistan', population: 27657145, region: 'Asia', capital: 'Kabul' },
  { flag: AlandIslandsflag, name: 'Aland Islands', population: 28875, region: 'Europe', capital: 'Mariehamn' },
  { flag: Albaniaflag, name: 'Albania', population: 2886026, region: 'Europe', capital: 'Tirana' },
  { flag: Algeriaflag, name: 'Algeria', population: 40400000, region: 'Africa', capital: 'Algiers' },
];

const Flags = () => {
  const [countries, setCountries] = useState(initialCountries);
  const [searchCountry, setSearchCountry] = useState('');
  const [filterRegion,setFilterRegion] = useState('');
  const {theme} = useContext(ThemeContext)

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      const structuredData = data.map(country => ({
        flag: country.flags?.svg,
        name: country.name?.common,
        population: country.population,
        region:country.region,
        capital: country.capital?.[0] || 'N/A',
      }))
      setCountries(structuredData)
    })
    .catch(error => console.error('Error fetching countries:' , error))
  }, [])

  const filterCountries = countries.filter((country) =>{
    const searchCountryMatch = country.name.toLowerCase().includes(searchCountry.toLowerCase());
    const filterRegionMatch = '' || country.region.toLowerCase() === filterRegion.toLowerCase();

    return searchCountryMatch && filterRegionMatch
  })

  return (
    <div className={` ${theme === 'light' ? 'bg-light-bg' : 'bg-d-dark'} mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto  shadow-lg shadow-opacity-50 `}>
       
      {countries.map((country, index) => (
        <article key={index}>
          <section className={`${theme === 'light' ? 'bg-c-white' : 'bg-m-dark'} shadow-lg shadow-opacity-70`}>
            <div>
            <img src={country.flag} alt={`${country.name} flag`}  />
          </div>
          <div className='p-5 leading-relaxed'>
            <h2 className='font-bold mt-3 mb-3 text-lg'>{country.name}</h2>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
          </section>
        </article>
      ))}
    </div>
  );
}

export default Flags;


//<img src={country.flag?.svg || initialCountries[index % initialCountries.length].flag} alt={`${country.name.common} flag`}  />