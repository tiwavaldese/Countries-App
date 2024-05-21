import React from 'react';
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

const countries = [
  { flag: Germainflag, name: 'Germany', population: 81770900, Region: 'Europe', Capital: 'Berlin' },
  { flag: USAflag, name: 'United States of America', population: 323947000, Region: 'Americas', Capital: 'Washington, D.C' },
  { flag: Brazilflag, name: 'Brazil', population: 206135893, Region: 'Americas', Capital: 'Brasilia' },
  { flag: Icelandflag, name: 'Iceland', population: 334300, Region: 'Europe', Capital: 'Reykjavik' },
  { flag: Afghanistanflag, name: 'Afghanistan', population: 27657145, Region: 'Asia', Capital: 'Kabul' },
  { flag: AlandIslandsflag, name: 'Aland Islands', population: 28875, Region: 'Europe', Capital: 'Mariehamn' },
  { flag: Albaniaflag, name: 'Albania', population: 2886026, Region: 'Europe', Capital: 'Tirana' },
  { flag: Algeriaflag, name: 'Algeria', population: 40400000, Region: 'Africa', Capital: 'Algiers' },
];

const Flags = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={` ${theme === 'light' ? 'bg-ligt-bg' : 'bg-d-dark'} mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto  shadow-lg shadow-opacity-50 `}>
      {countries.map((country, index) => (
        <article key={index}>
          <section className={`${theme === 'light' ? 'bg-c-white' : 'bg-m-dark'} shadow-lg shadow-opacity-70`}>
            <div>
            <img src={country.flag} alt={`${country.name} flag`} />
          </div>
          <div className='p-5 leading-relaxed'>
            <h2 className='font-bold mt-3 mb-3 text-lg'>{country.name}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.Region}</p>
            <p>Capital: {country.Capital}</p>
          </div>
          </section>
        </article>
      ))}
    </div>
  );
}

export default Flags;
