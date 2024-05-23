import React from 'react'

const CountriesDetail = ({country, theme}) => {
        

  return (
    <div className={` ${theme === 'light' ? 'bg-light-bg' : 'bg-d-dark'} mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto  shadow-lg shadow-opacity-50 `}>
       
      {countries.map((country, index) => (
        <article key={index}>
          <section className={`${theme === 'light' ? 'bg-c-white' : 'bg-m-dark'} shadow-lg shadow-opacity-70`}>
            <div>
            <img src={country.flag } alt={`${country.name} flag`}  />
          </div>
          <div className='p-5 leading-relaxed'>
            <h2 className='font-bold mt-3 mb-3 text-lg'>{country.name}</h2>
            <p>Native Name: {country['native-name']}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Sub-Region: {country['sub-region']}</p>
            <p>Capital: {country.capital}</p>
            <div>
            <p>Top Level Domain: {country['top-level-domain']} </p>
            <p>Currencies: {Object.values(country.currencies || {}).map(curr => curr.name).join(', ')}</p>
            <p>Languages: {Object.values(country.languages || {}).join(', ')}</p>
            </div>
            <p>Border Countries: {country['border-countries'] ? country['border-countries'].join(', ') : 'None'}</p>
          </div>
          </section>
        </article>
      ))}
    </div>
  )
}

export default CountriesDetail
