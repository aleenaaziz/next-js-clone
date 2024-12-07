import React from 'react'
import Link from 'next/link'
import Cart from '@/app/cart/page'

const Navbar = () => {
  return (
    <div className='border-b-2 -ml-20 '>
        <h1 className='float-left my-2 mx-2 font-bold text-2xl ml-20'>Exclusive</h1>
      <nav className="flex  space-x-4 my-4  px-64 ">
          <Link href="/">
            <li className=" px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 list-none">
              Home
            </li>
          </Link>
          <Link href="/">
          <li
            className=" px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 list-none"
          >
            Contact
          </li>
          </Link>
          <Link href="/">
          <li
            
            className=" px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 list-none"
          >
            About
          </li></Link>
          <Link href="/">
          <li
            
            className=" px-3 py-2 mr-40 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 list-none"
          >
            SignUp
          </li>
          </Link>
          <input
                        type="text"
                        className="ml-60!important border border-gray-300 rounded py-2 pl-4 pr-10 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="What are you looking for?"
                    />
                    <Link href='/wishList'>
                    <div className='w-10 h-10'>
                    <img src="/images/heart.png" alt="heart" className='w-10 h-10'/>
                    </div>
                    </Link>
                    <Link href='/cart'>
                    <div className='w-7 h-7 mt-1'>
                    <img src="/images/cart.png" alt="cart" className='w-7 h-7 mt-1'/>
                    </div>
                    </Link>
        </nav>

    </div>
  )
}

export default Navbar
