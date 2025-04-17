import React from 'react'
import Button from '@mui/material/Button'
import { IoSearch } from 'react-icons/io5'
const Search = () => {
  return (
    <div className='searchbox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'>
        <input type='text' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' placeholder='Search for products, brands and more...' />
       
        <Button className='!absolute top-[5px] right-[5px] z-50 w-[35px] min-w-[35px] h-[35px]' >
          <IoSearch />
        </Button>
    </div>
  )
}

export default Search