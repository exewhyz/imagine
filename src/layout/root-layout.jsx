import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/navbar'

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen w-full'>
        <Navbar />
        <Outlet/>
    </div>
  )
}

export default RootLayout