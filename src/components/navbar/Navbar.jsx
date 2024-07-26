import React, { useState } from 'react'
import { useSearch } from '../../context/searchcontext'

const Navbar = () => {

    const {search, setSearch} = useSearch();

  return (
    <nav className='sticky top-0 bg-white border-b-2 w-full py-4 sm:px-20 px-6 flex justify-between z-50'>
        <span className='sm:text-3xl text-2xl font-bold text-orange-500'>PokeApp</span>

        <input
        type="text"
        placeholder='Search'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        className='sm:w-72 w-36 rounded-md pl-3 border border-orange-500 outline-orange-500'
        />
    </nav>
  )
}

export default Navbar