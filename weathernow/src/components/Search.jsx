import React from 'react'
import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons"

function Search() {
  return (
    <div className='flex justify-center'>
        <div className='flex-row justify-center my-20 w-3/4  mx-40'>
            <div className='flex flex-row items-center space-x-5 justify-center'>
                <UilLocationPoint size={28} className="text-white cursor-pointer"/>
                <input 
                    type="text" 
                    className='rounded font-light p-2 shadow-xl text-xl focus:outline-none' 
                    placeholder='enter city name here'
                    />
                <UilSearch size={28} className="text-white cursor-pointer"/>

            </div>

        </div>
    </div>
  )
}

export default Search