import React, { useEffect, useState } from 'react'
import Cards from './Cards'
// import list from '../../public/list.json'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Popular() {

  const [manga,setManga]=useState([])
  useEffect(()=>{
    const getManga = async()=>{
      try {
       const res = await  axios.get('http://localhost:4001/manga')
       console.log(res.data)
       setManga(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getManga();
  } , [])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-24 items-center justify-center  text-center'>
        <h1 className='text-2xl text-white font-semibold md:text-4xl'>Douzo yoroshiku!We are pleased to meet you here <span className='text-pink-400'>(UwU)!</span></h1>
        <p className='text-white mt-12'>
        Discover popular Japanese manga series with over 110 chapters to read on MangaMafia! Sign up and read the 1st chapter of even more titles for FREE!
        </p>
        <Link to='/'>
        <button className='mt-6 bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-200'> Back </button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          manga.map((item) =>(
            <Cards key={item.id} item ={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Popular
