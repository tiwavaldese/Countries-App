import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

function SearchInput({theme, setSearchCountry, setFilterRegion}) {
  const handleSearchCountry = (event)=>{
setSearchCountry(event.target.value)
  }

  const handleFilterRegion = (event)=>{
    setFilterRegion(event.target.value)
  }
  return (
    <div className='grid justify-between mt-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-5'>
<div className={`relative w-full md:w-60 lg:w-60  items-center flex mt-3 ${theme === 'light'? 'bg-c-white' : 'bg-m-dark'}  ${theme === 'light'? 'text-d-dark' : 'text-c-white'}`}>
<span className='absolute inset-y-0 left-0 text-lg p-3 flex  pointer-events-none'>
  <IoSearchOutline />
</span> 
  <input className={`pl-12 h-10  ${theme === 'light' ? 'bg-c-white text-gray-500' : 'bg-m-dark text-c-white'} border-0 focus:outline-none text-sm`}
    type="search"
    onChange={handleSearchCountry}
    placeholder="Search for a country"/>
  </div>
  <select className={`pl-2 h-10 w-full md:w-60 lg:w-40 flex ml-auto mt-3 ${theme === 'light'? 'bg-c-white' : 'bg-m-dark'}  ${theme === 'light'? 'text-c-light-gray' : 'text-c-white'} border-0 focus:outline-none text-sm `} onChange={handleFilterRegion} defaultValue="">
  <option disabled hidden selected  value=''>Filter by Region</option>
  <option value='africa'>Africa</option>
  {/* <option value="north america">North America</option>
  <option value="central america">Central America</option>
  <option value="south america">South America</option> */}
  <option value='america'>Americas</option>
  <option value='asia'>Asia</option>
  <option value='europe'>Europe</option>
  <option value='oceania'>Oceania</option>
</select>
</div>
  )
}

export default SearchInput

