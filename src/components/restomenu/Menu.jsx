import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { scroll2Data } from '../../mock data/constant'
import { Link } from 'react-router'
import ShimmerMenu from '../../components/homecomponents/shimmers/ShimmerMenu'
// import Scroller2 from './Scroller/Scroller2'
function CardImg(props) {
  console.log(props)
  return <div className='Scroll_box'>
    <img src={scroll2Data + props?.data?.info?.cloudinaryImageId} alt="" />
    <h4>{props?.data?.info.name}</h4>
    <p className='rating'><span><i className="bi bi-star-fill"></i></span> {props?.data?.info?.avgRating} {props?.data?.info?.sla?.slaString}</p>
    <p>{props?.data?.info?.cuisines.join(",")}</p>
    <p>{props?.data?.info?.areaName}</p>
  </div>
}
function Menu() {
  const [card, setCard] = useState([])
  const reference=useRef("")
  // console.log(card)

  function veg(){
    const veg=card.filter((x)=>{
      return (x?.info?.veg == true) 
    })
    setCard(veg)
  }

  function nonveg(){
    const nonveg=card.filter((x)=>{
      return (x?.info?.veg!= true) 
    })
    setCard(nonveg)
  }

  function ratings(){
    const rating=card.filter((x)=>{
      return (x?.info?.avgRating>4.5)
    })
    setCard(rating)
  }

  function fast(){
    const fast=card.filter((x)=>{
        return (x?.info?.sla?.deliveryTime <40)
    })
    setCard(fast)
  }

  function text(){
    const input=card.filter((x)=>{
      return (x?.info?.name?.toLowerCase().includes(reference.current.value.toLowerCase()))
    })
    setCard(input)
  }

  async function CardApi() {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9360036&lng=77.6808128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const result = await response.json()
    // console.log(result?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
    setCard(result?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  useEffect(() => {
    CardApi()
  }, [])
  if(card.length==0){
    return <ShimmerMenu/>
  }
  else{
    return (
      <div className='body'>
        <h2>Restaurants with online food delivery in Bangalore</h2>
        <div className='filters'>
          <div className='btns'>
            <button onClick={fast} className='btn'>fast delivery</button>
            <button onClick={ratings}  className='btn'>rating greater 4.5</button>
            <button onClick={veg}  className='btn'>Veg</button>
            <button onClick={nonveg}  className='btn'>NonVeg</button>
          </div>
          <div className='search'>
            <input type="text" placeholder='serch some thing' ref={reference}/>
            <button onClick={text} className='btn'>Search</button>
          </div>
        </div>
        <div className='scrollbox-2 cardImges'>
          {
            card.map((x, index) => {
              return <Link className='link' to={`/city/banglore/${x.info.name}/${x.info.id}`}><CardImg key={index}  data={x} /></Link>
            })
          }
        </div>
      </div>
    )
  }
  
}

export default Menu