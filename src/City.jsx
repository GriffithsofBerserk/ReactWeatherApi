import React from 'react'

const City = ({city}) => {
    console.log(city);
  return (
    <div className='text-center sm:text-center'>
        <div className='box-border h-42 w-70 p-8 border-8'>
            <div className='text-5xl'>{city.main.temp}</div>
            <div className='text-3xl'>{city.name}</div>
            <div className='text-2xl'>{city.weather[0].main}</div>
        </div>
    </div>
  )
}

export default City