import React, { useState } from 'react'
import { useEffect } from 'react'
// import { data } from 'react-router'



function Cards(props) {
    // const [sep ,setsep ]=useState([])
    console.log(props.data)
    return (
        <div className='card1'>
            <div className='text'>
                <p>{(props?.data?.card?.card?.info?.isVeg == 1) ? <i className="bi bi-record-circle fs-3 text-success"></i> : <i className="bi bi-caret-left-square fs-3 text-danger"></i>}</p>
                <h4>{props?.data?.card?.info?.name || props.data.card.card.title}</h4>
                <p><span><i class="bi bi-currency-rupee"></i></span>({(props?.data?.card?.info?.defaultPrice || props?.data?.card?.info?.price) / 100})</p>
                <p>{props?.data?.card?.info?.description}</p>
            </div>
            <div className='image'>
                <img src={props?.data?.card?.info?.imageId} alt="" />
                <button>ADD</button>
            </div>
        </div>
    )
}

function Mcdonals() {

    const [arr, setarr] = useState([])


    async function Mcdonals() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9360036&lng=77.6808128&restaurantId=237665&catalog_qa=undefined&submitAction=ENTER")
        const result = await response.json()
        // console.log(result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
        setarr(result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
    }
    useEffect(() => {
        Mcdonals()
    }, [])


    return (
        arr.map((x,index) => {
            // const data=[x.card.card.itemCards]
            console.log(typeof(Array.isArray(x.card.card.itemCards)))
            return <div>
                {(x.card.card.title !== undefined) ? <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {x.card.card.title}({Array.isArray(x.card.card.itemCards) ? x.card.card.itemCards.length : ''})
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <Cards key={index} data={x}/>
                            </div>
                        </div>
                    </div>
                </div>
                    : null
                }

            </div>
        })
    )
}

export default Mcdonals