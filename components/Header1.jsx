'use client'
import Image from 'next/image'
import Blocks from './Blocks'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Header1 = () => {


  let auth;
  if (typeof window !== 'undefined') {
    auth = Cookies.get("user");

  }

  
  const router =useRouter()
  const handleLogout = () => {
    Cookies.remove('user');
    router.push('/')
  }
  return (
    <>
      <div className='flex justify-between items-center h-24 px-10'>
          <Image className='w-28 h-28' src={'/logo.png'} width={200} height={200} />
          <div className='flex h-full'>
          <Blocks title={"Become a member"} para={'Additional 10% off on stays'} />
              <Blocks title={ `OYO for Business`} para={'Trusted by 5000 Corporates'} />
          <Blocks title={'List your property'} para={'Start earning in 30 mins'}/>
          <Blocks title={'0124-6201611'} para={'Call us Book now'}/>
          </div>
          <div className='flex items-center px-3'>
          <Image src={'/demo.svg'} width={20} height={20} />
          {auth ? (
            <>
              {}
              <h3 className='font-bold cursor-pointer' onClick={handleLogout}>Logout</h3>
              </>
          ) : (
              <Link href={"/login"} >
                <h3 className='font-bold'>Login / Signup</h3>
              </Link>
         )}
              
          </div>
          
          
      </div>
      
      </>
  )
}

export default Header1