import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hotel = () => {
  return (
    <div className='border-2 h-72 border-red-500 rounded-lg w-full mb-5 p-5'>
      <div className='flex'>
    <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCFbecz5uAAuveP7NaIWV2pZWxIw44_llZ-C94yyQtQ&s"} alt='hotel' className='w-96 h-60 mr-3' width={200} height={200}/>
     
      <div className='grid grid-rows-3'>
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCFbecz5uAAuveP7NaIWV2pZWxIw44_llZ-C94yyQtQ&s"} alt='hotel' className='w-28' width={200} height={200} />
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCFbecz5uAAuveP7NaIWV2pZWxIw44_llZ-C94yyQtQ&s"} alt='hotel' className='w-28 ' width={200} height={200} />
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCFbecz5uAAuveP7NaIWV2pZWxIw44_llZ-C94yyQtQ&s"} alt='hotel' className='w-28 ' width={200} height={200} />
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCFbecz5uAAuveP7NaIWV2pZWxIw44_llZ-C94yyQtQ&s"} alt='hotel' className='w-28' width={200} height={200}/>
        </div>
        <div className='ml-20'>
          <h2 className='font-bold text-xl line-clamp-1'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
          <p className='text-justify my-5 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui atque debitis a itaque corporis repellendus doloribus commodi similique est.</p>
          <p className='text-2xl my-5'>
            <span className='font-bold'>Facilities :</span>
            <span>Free wifi, Pet care, Swimming Pool ,Beaches , Resort</span>
          </p>
          <div className='flex items-center'>
          <button className='w-48 text-white h-14 rounded-lg bg-blue-500'>Price: 4500</button>
          <Link href={'/hotels/2'} className='text-xl ml-10 font-bold text-red-600'>See Details</Link>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Hotel