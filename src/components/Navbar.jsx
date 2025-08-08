import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [isDark, setIsDark] = useState(false)

useEffect(()=>{
    if(showMobileMenu){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
    return ()=>{
        document.body.style.overflow = 'auto'
    };
},[showMobileMenu])

useEffect(() => {
  const root = document.documentElement
  setIsDark(root.classList.contains('dark'))
}, [])

const toggleTheme = () => {
  const root = document.documentElement
  const nextDark = !isDark
  setIsDark(nextDark)
  if (nextDark) {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={isDark ? assets.logo_dark : assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <div className='hidden md:flex items-center gap-3'>
          <button onClick={toggleTheme} aria-label='Toggle theme' className='border border-white/60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/10'>
            {isDark ? '☀️' : '🌙'}
          </button>
          <button className='bg-white text-gray-900 px-8 py-2 rounded-full'>Sign up</button>
        </div>
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
      {/* --------- mobile-menu------ */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white dark:bg-gray-900 transition-all`}>
        <div className='flex justify-between items-center p-6'>
            <button onClick={toggleTheme} aria-label='Toggle theme' className='border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full w-10 h-10 flex items-center justify-center'>
              {isDark ? '☀️' : '🌙'}
            </button>
            <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6 cursor-pointer' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-gray-800 dark:text-gray-200'>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py2 rounded-full inline-block'>Home</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py2 rounded-full inline-block'>About</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py2 rounded-full inline-block'>Projects</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Testimonails" className='px-4 py2 rounded-full inline-block'>Testimonails</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
