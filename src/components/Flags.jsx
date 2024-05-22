import React from 'react';


const Flags = ({theme, countries}) => {

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