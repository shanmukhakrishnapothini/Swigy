import React from 'react'
import { data } from '../../../mock data/constant'
import { useState } from 'react'
import { useEffect } from 'react'
import ShimmerScroll1 from '../shimmers/ShimmerScroll1'
function Image(Prop) {
    const cont = Prop?.data?.imageId
    // console.log(data+cont)
    // console.log(Prop?.data?.imageId)
    return <img className='scroll1' src={data + cont} alt="" />

}
function Scroller1() {
    // const pict=[]
    const [pict, setpict] = useState([])

    function fet() {
        {
            fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9360036&lng=77.6808128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            .then((response) => {
                const data = response.json()
                return data
            })
            .then((data) => {
                setpict(data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
                // console.log(data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
            })
        }
    }
    useEffect(() => {
        fet()
    }, [])
    // fet() 
    if(pict.length==0){
       return  <ShimmerScroll1/>
    
    }
    else{
        return (
            <div className='body'>
                <h2>what's in your mind?</h2>
                <div className='images'>
                    {
                        pict.map((x, index) => {
                            return <Image key={index} data={x} />
                        })
                    }
                </div>
                <hr></hr>
            </div>
            
        )
    }

}

export default Scroller1