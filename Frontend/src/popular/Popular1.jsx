import React from 'react'
import Navbar from '../components/Navbar'
import Popular from '../components/Popular'
import Footer from '../components/Footer'

function Popular1() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Popular/>
    </div>
    <Footer/>
    </>
  )
}

export default Popular1
