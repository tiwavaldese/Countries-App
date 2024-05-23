import React from 'react'
import './App.css';
import MoonIcon from './components/MoonIcon'
import SearchInput from './components/SearchInput'
import { useContext, useState, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext';
import Flags from './components/Flags';
import Germainflag from './assets/Germain-flag.png';
import USAflag from './assets/USA-flag.png';
import Brazilflag from './assets/Brazil-flag.png';
import Icelandflag from './assets/Iceland-flag.png';
import Afghanistanflag from './assets/Afghanistan-flag.png';
import AlandIslandsflag from './assets/AlandIslands-flag.png';
import Albaniaflag from './assets/Albania-flag.png';
import Algeriaflag from './assets/Algeria-flag.png';
import CountriesDetail from './components/CountriesDetail';
import {  Router, Route, Routes } from 'react-router-dom';

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


function App() {
  const [countries, setCountries] = useState(initialCountries);
  const [searchCountry, setSearchCountry] = useState('');
  const [filterRegion,setFilterRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null)
  const {theme} = useContext(ThemeContext)

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      const structuredData = data.map(country => ({
        flag: country.flags?.svg,
        name: country.name?.common,
        'native-name': country.nativeName?.official,
        population: country.population,
        region:country.region,
        'sub-region': country.subregion,
        capital: country.capital?.[0] || 'N/A',
        'border-countries': country.borders || [],
        'top-level-domain': country.tld?.[0] || '',
        currencies: country.currencies,
        languages: country.languages,
      }))
      setCountries(structuredData)
    })
    .catch(error => console.error('Error fetching countries:' , error))
  }, [])

  const filterCountries = countries.filter((country) =>{
    const searchCountryMatch = country.name.toLowerCase().includes(searchCountry.toLowerCase());
    const filterRegionMatch = filterRegion === '' || country.region.toLowerCase() === filterRegion.toLowerCase();

    return searchCountryMatch && filterRegionMatch
  })
const handleCountryClick = (country) =>{
  setSelectedCountry(country)
}
  return (
    <Router>
    <div className={`p-[2rem] w-full md-w-[60%] lg-w-[45%] font-poppins ${theme === 'light' ? 'bg-light-bg text-d-dark' : 'bg-d-dark text-c-white'} `}>     
      <MoonIcon/>
      <SearchInput
      theme={theme}
      setSearchCountry = {setSearchCountry}
      setFilterRegion = { setFilterRegion}
      />
      {
        selectedCountry ? (
        <CountriesDetail  country ={selectedCountry} theme ={theme} />
        ):
(
      <Flags 
      theme={theme}
      countries = { filterCountries}
      onCountryClick = {handleCountryClick}
      /> 
      )}  
      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/country/:countryName' element={<CountriesDetail/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
