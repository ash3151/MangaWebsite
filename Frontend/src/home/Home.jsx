import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import LatestChap from '../components/LatestChap'
import Footer from '../components/Footer'

function Home() {
  return (
   <>
   <div>
   <Navbar/>
  <Banner/>
  <LatestChap/>
  <Footer/>
   </div>
   </>
  )
}

export default Home
