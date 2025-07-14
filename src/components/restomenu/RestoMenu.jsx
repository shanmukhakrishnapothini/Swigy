import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'

import Drop1 from './Drop1'

function RestoMenu() {
    const{ id } = useParams()
    const [obj,setobj] = useState([])

    useEffect(()=>{
        function Resto() {
            {
                fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9360036&lng=77.6808128&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
                    .then((response) => {
                        const data = response.json()
                        return data
                    })
                    .then((data) => {
                        const result=data
                        setobj(result.data.cards)
                    })
            }
        }
        Resto()
    },[id])
    
    const data1 = location.pathname.replaceAll("%20", "-")
    if (!obj || obj.length === 0) {
        return <h3></h3>
    }
    else{
        return (
            <div className='cardexternal'>
                <p>{data1}</p>
                <h2>{obj[2]?.card?.card?.info?.name}</h2>
                <div className='cardinternal'>
                    <p><i className="bi bi-star-fill"></i><span>{obj[2]?.card?.card?.info?.avgRating}</span><span>({obj[2]?.card?.card?.info?.totalRatingsString}Ratings)</span>  .  {String(obj[2]?.card?.card?.info?.costForTwoMessage)}</p>
                    <p>{obj[2]?.card?.card?.info?.cuisines.join(",")}</p>
                    <p><span><i className="bi bi-dot"></i></span>{obj[2]?.card?.card?.info?.locality}</p>
                    <p><span><i className="bi bi-dot"></i></span>{obj[2]?.card?.card?.info?.sla?.slaString}</p>
                </div>
                <Drop1/>
            </div>
        )
    }
    
}

export default RestoMenu