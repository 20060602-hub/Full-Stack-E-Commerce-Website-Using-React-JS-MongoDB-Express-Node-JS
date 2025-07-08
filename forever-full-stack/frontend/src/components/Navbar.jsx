import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaArrowLeft } from 'react-icons/fa'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#fce3ec] to-[#ffe8d6] dark:from-gray-800 dark:to-gray-900 shadow-md px-6 py-4 flex items-center justify-between font-bold tracking-wide text-sm uppercase">


      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} className='w-36' alt='Logo' />
      </Link>

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-8 text-gray-800 dark:text-white'>
        <NavLink to='/' className='hover:underline'>Home</NavLink>
        <NavLink to='/collection' className='hover:underline'>Collection</NavLink>
        <NavLink to='/about' className='hover:underline'>About</NavLink>
        <NavLink to='/contact' className='hover:underline'>Contact</NavLink>
      </ul>

      {/* Right Side Options */}
      <div className='flex items-center gap-6 text-gray-800 dark:text-white'>

        {/* Search */}
        <div
          onClick={() => {
            setShowSearch(true)
            navigate('/collection')
          }}
          className='flex items-center gap-1 cursor-pointer hover:underline'
        >
          <FaSearch size={14} />
          <span>Search</span>
        </div>

        {/* Account */}
        <div className='group relative flex items-center gap-1 cursor-pointer hover:underline'>
          <FaUser size={14} />
          <span onClick={() => !token && navigate('/login')}>Account</span>
          {token && (
            <div className='group-hover:block hidden absolute right-0 pt-5'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded shadow'>
                <p className='cursor-pointer hover:text-black dark:hover:text-white'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black dark:hover:text-white'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black dark:hover:text-white'>Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative flex items-center gap-1 hover:underline'>
          <FaShoppingCart size={14} />
          <span>Cart</span>
          <span className='absolute -right-3 -bottom-2 w-4 h-4 text-[10px] flex items-center justify-center bg-black text-white rounded-full'>
            {getCartCount()}
          </span>
        </Link>

        {/* Mobile Menu */}
        <FaBars
          className='sm:hidden cursor-pointer'
          size={18}
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${visible ? 'w-64' : 'w-0 overflow-hidden'}`}>
        <div className='flex flex-col text-gray-700 dark:text-white h-full'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-3 p-4 border-b cursor-pointer'
          >
            <FaArrowLeft />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='p-4 border-b' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='p-4 border-b' to='/collection'>Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className='p-4 border-b' to='/about'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} className='p-4 border-b' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
