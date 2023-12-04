'user client'

import Link from "next/link"

const Header3 = () => {
  return (
      <div className='bg-gradient-to-r from-red-600 to bg-red-200 h-48'>
          <div className='mx-10'>
              <h2 className='text-3xl text-white text-center font-bold py-4'>Over 157,000 hotels and homes across 35 countries
              </h2>
              <div className='grid grid-cols-5 my-5 px-20'>
                  <input type="text" className='outline-none border-r-2 h-14 text-lg border-gray-400 col-span-2 px-5' placeholder='Search by city,hotel, or neighborhood'  />
                  <input type="text" className='outline-none border-r-2 h-14 text-lg border-gray-400 col-span-1 px-5'  />
                  <input type="text" className='outline-none border-r-2 h-14 text-lg border-gray-400 col-span-1 px-5'  />
                  <Link href={'/hotels'}>
            <button className='h-14 border-r-2 bg-green-600 col-span-1 px-10 text-2xl text-white font-bold'>Search</button>
            </Link>
              </div>
          </div>
    </div>
  )
}

export default Header3