import React, { useState, useEffect, useContext } from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FaArrowLeft } from 'react-icons/fa'

const CountriesDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate(); 

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
          currencies: Object.values(countryData.currencies || {}).map(currency => currency.name).join(', '),
          languages: Object.values(countryData.languages || {}).join(', '),
        };
        setCountry(structuredData);
      })
      .catch(error => console.error('Error fetching country:', error));
  }, [countryName]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`pt-5  ${theme === 'light' ? 'bg-light-bg' : 'bg-d-dark'}  w-full md:w-[60%] lg:w-[40rem]`}>
       <button 
          className={` ${theme === 'light' ? 'bg-c-white text-d-dark' : 'bg-m-dark text-c-white'} mb-5 hover:bg-gray-200  shadow-lg py-2 flex px-4 rounded`} 
          onClick={() => navigate('/')}
        >
          <FaArrowLeft className="w-4 h-4 mr-2" />  
         Back 
        </button>
      <div className={`${theme === 'light' ? 'bg-c-white' : 'bg-m-dark'} p-5 flex lg:w-[76rem] `}>
      
       <span className='lg:w-[35rem]'><img className='lg:h-[20rem]' src={country.flag} alt={`${country.name} flag`} /></span>
        <div>
            <div className='flex'>
        <div className='pl-12 pt-7'> 
        <h2 className='font-bold mt-3 mb-3 text-lg'>{country.name}</h2>
        <p><span className='font-bold'>Native Name:</span> {country['native-name'] ? Object.values(country['native-name']).map(native => native.common).join(', ') : 'N/A'}</p>
        <p><span className='font-bold'>Population:</span> {country.population.toLocaleString()}</p>
        <p><span className='font-bold'>Region:</span> {country.region}</p>
        <p><span className='font-bold'>Sub-Region:</span> {country['sub-region']}</p>
        <p><span className='font-bold'>Capital:</span> {country.capital}</p>
        </div>
        <div className='pl-12 pt-12'>
        <p><span className='font-bold'>Top Level Domain:</span> {country['top-level-domain']}</p>
        <p><span className='font-bold'>Currencies:</span> {country.currencies}</p>
        <p><span className='font-bold'>Languages:</span> {country.languages}</p>
        </div>
        </div>
        <p className='pl-12 pt-12 flex'><span className='font-bold'>Border Countries:</span> <span className='shadow-lg flex ml-5 gap-5'>{country['border-countries'].length > 0 ? country['border-countries'].join(', ') : 'None'}</span></p>
      </div>
      </div>
    </div>
  );
};

export default CountriesDetail;