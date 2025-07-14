import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { scroll2Data } from '../../../mock data/constant'

import ShimmerScroll2 from '../shimmers/shimmerScroll2'


export function Scroll2(props) {
    // console.log(props.data)
    return <div>
        <div className='Scroll_box'>
            <img src={scroll2Data+props?.data?.info?.cloudinaryImageId} alt="" />
            <h4>{props?.data?.info.name}</h4>
            <p className='rating'><span><i className="bi bi-star-fill"></i></span> {props?.data?.info?.avgRating} {props?.data?.info?.sla?.slaString}</p>
            <p>{props?.data?.info?.cuisines.join(",")}</p>
            <p>{props?.data?.info?.areaName}</p>
        </div>
    </div>
}
function Scroller2() {
    const [cont, setcont] = useState([])
    // console.log(cont.length)
    async function Scroller2api() {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9360036&lng=77.6808128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const result = await response.json()
        // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setcont(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(cont)

    }
    useEffect(() => {
        Scroller2api()
    }, [])
    if(cont.length==0){
       return <ShimmerScroll2/>
    }
    else{
        return <div className='body'>
        <h2>Top restaurant chains in Chhindwara</h2>
        <div>
            <div className='scrollbox-2'>
                {
                    cont.map((x, index) => {
                       return <Scroll2 key={index} data={x} />
                    })
                }
            </div>
        </div>
    </div>
    }
}

export default Scroller2