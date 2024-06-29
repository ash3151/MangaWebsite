import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import list from '../../public/list.json'
import Cards from './Cards';
import axios from 'axios';

function LatestChap() {

  const [manga,setManga]=useState([])
  useEffect(()=>{
    const getManga = async()=>{
      try {
       const res = await  axios.get('http://localhost:4001/manga')
    
       const data=res.data.filter((data)=> data.category === "Free")
       console.log(data)
       setManga(data)
      } catch (error) {
        console.log(error)
      }
    }

    getManga();
  } , [])
    // const filterData = list.filter((data)=> data.category === "Free");
    // console.log(filterData);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-semibold text-white text-xl pb-2'>Latest Chapters</h1>
      <p className='text-white'>Weekly , Monthly of your favourite Manga</p>
      </div>
    

    <div>
    <Slider {...settings}>
        {manga.map((item) => (
          <Cards item ={item}  key = {item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default LatestChap
