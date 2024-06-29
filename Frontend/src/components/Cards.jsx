import React from 'react'

function Cards({item}) {
    
  return (
    <>
    <div className='mt-3 my-3 p-3'>
    <div className="card w-80 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.{item.price}</div> 
      <div className=" cursor-pointer px-2 py-1 hover:text-pink-500 duration-200">Read Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
