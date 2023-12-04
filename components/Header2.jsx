import React from 'react'

const Header2 = () => {
    const List = [
        {
           name:'Banglore'
        },
        {
            name:'Delhi'
        }, 
        {
            name:'Mumbai'
        },
        {
            name:'Pune'
        },
        {
            name:'Kolkata'
        },
        {
            name:'Jaipur'
        },
        {
            name:'Patna'
        },
        {
            name:'Hydrabad'
        },
        {
            name:'Chennai'
        },
    ]
  return (
      <div className='flex justify-between px-10 py-2 bg-gray-100'>
          {List.map((city) => (
              <>
                  <span className='cursor-pointer' key={city.name}>{ city.name}</span>
              </>
          ))}
    </div>
  )
}

export default Header2