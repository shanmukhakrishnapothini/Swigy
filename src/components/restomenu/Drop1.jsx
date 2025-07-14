import React, { useEffect, useState } from 'react'
import { Drop11 } from '../../mock data/constant'
import Mcdonals from './Mcdonals'
import { useParams } from 'react-router'

import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/swiggyCreateSlice'



function Cards(props) {

    const pushData=useDispatch()

    function finalItems(){
        const obj={
            name:props?.data?.card?.info?.name || props.data.card.card.title,
            cost:(props?.data?.card?.info?.defaultPrice||props?.data?.card?.info?.price)/100
        }
        console.log(obj)
    
        pushData(addItem(obj))
    }
    
    // console.log(props.data)
    return (
        <div className='card1'>
            <div className='text'>
                <p>{(props?.data?.card?.info?.isVeg==1)?<i className="bi bi-record-circle fs-3 text-success"></i>:<i className="bi bi-caret-left-square fs-3 text-danger"></i>}</p>
                <h4>{props?.data?.card?.info?.name || props.data.card.card.title}</h4>
                <p><span><i class="bi bi-currency-rupee"></i></span>({(props?.data?.card?.info?.defaultPrice||props?.data?.card?.info?.price)/100})</p>
                <p>{props?.data?.card?.info?.description}</p>
            </div>
            <div className='image'>
                <img src={Drop11+props?.data?.card?.info?.imageId} alt="" />
                <button onClick={finalItems}>ADD</button>
            </div>
        </div>
    )
}

function Drop1() {

    const {id}=useParams()
    const [drop1, setdrop1] = useState([])
    useEffect(()=>{
        async function fetch1() {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9360036&lng=77.6808128&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
            const result = await response.json()
            setdrop1(result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards ||result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
            // console.log(result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
        }
        fetch1()
        
    },[id])
    if(id==237665){
        return <Mcdonals/>
    }
    else{
        return (
            <div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Recomended<span>({drop1.length})</span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {
                                    drop1.map((x, index) => {
                                        return (<Cards key={index} data={x} />)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Drop1