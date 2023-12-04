'user client'
import Image from 'next/image'
import React from 'react'
import Footer from './Footer'

const Poster = () => {
    return (
      <>
    <div className="mx-20">
      <Image
          src={"/banner1.png"}
            alt="banner1"
            width={200}
            height={200}
          className=" h-60 w-full" unoptimized />
        
      </div>
      <div className="my-10 mx-20">
      <Image src={"/banner2.webp"} alt="banner2" width={200} height={200} unoptimized className="h-30 w-full"/>
            </div>
            <div className='flex justify-between border-2 rounded-lg mx-20 px-2'>
                <div className='flex items-center px-2'>
                    <Image src={'/fire.jpg'} alt='fire' width={60} height={60} />
                    <div className='flex flex-col p-5'>
                        <h3 className='font-bold text-xl'>Get access to exclusive deals</h3>
                        <p className='text-gray-500'>Only the best deals reach your inbox
</p>
                    </div>
                </div>
                <div className='flex gap-5 justify-center items-center px-2 mx-5'>
                    <input type="email" className='px-6 py-3 mr-5 outline-none border-gray-500 border w-80 h-12 rounded-lg' />
                    <button type='submit' className='w-40 h-12 rounded-lg bg-red-500 text-white cursor-pointer text-xl '>Notify me</button>
                </div>
                
            </div>
            
            </>
  )
}

export default Poster