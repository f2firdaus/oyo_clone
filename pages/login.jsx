'use client'
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [password, setPassword] = useState("")
  
  const router =useRouter()
    
    const handleToggle = () => {
        setLogin((prev)=>!prev)
  }
  const loginBtn =async () => {
    const res = await axios.post('/api/user/login', {
      email,
      password
    });
    if (res?.data) {
      Cookies.set('user',res.data.token)
      alert(res.data.msg);
      router.push('/')
      
    }
  }
  const handleSignUp =async () => {
    const res = await axios.post('/api/user/register', {
      name,
      email,
      password
    })
    if (res?.data) {
      Cookies.set('user',res.data.token)
      alert(res.data.msg)
    }
  }
  return (
    <div className="flex bg-login-background bg-cover bg-no-repeat  h-screen justify-center relative items-center">
      <div className=" absolute w-full top-10 px-20 flex items-center">
        <Link href={"/"}>
          <h2 className="text-5xl text-white font-bold mr-5">OYO</h2>{" "}
        </Link>
        <p className=" font-bold text-2xl text-white ">
          Hotels and homes across 800 cities, 24+ countries
        </p>
      </div>

      <div className="flex justify-center items-center w-9/12">
        <div className="">
          <h1 className="text-5xl font-bold text-justify text-white">
            There's a smarter Ways to OYO around
          </h1>
          <p className=" mt-5 text-2xl text-justify text-white ">
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </p>
        </div>
        <div className=" bg-white outline-none ml-10 w-10/12 border-0 pb-4 rounded">
          <p className=" h-10 flex items-center px-10 bg-gradient-to-r from-red-800 to-red-400 text-white">
            Sign up & Get ₹500 OYO Money
          </p>
          <div className="px-10">
            <h3 className=" text-3xl font-bold my-5">Login / Signup</h3>
            <p className=" font-bold text-md mb-1">
              Please enter your phone number to continue
            </p>

            {login ? "" : (
              <input onChange={(e)=>setName(e.target.value)}
                  type="text"
                  placeholder="Enter your name..."
                  className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                />
)}
              <>
                
                  <input onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email..."
                  className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                />
                  <input onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password..."
                  className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                />
              </>
            

            <button onClick={ login ? loginBtn :handleSignUp}
              type="submit"
              className=" w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
            >
             {login ? `LogIn`:`Signup`} 
            </button>
            <p className=" my-1 text-xl">
                          <span>
        {login ? ` Create new Account ?`:`Already have an account`}                              
                              </span>
              <span className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer" onClick={handleToggle}>
              {login ? `signup`:`login`} 
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
