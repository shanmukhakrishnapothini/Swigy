import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Cart() {

  const [total,settotal]=useState(0)
  const finalItems = useSelector((state) => state.cart.items)

  useEffect(()=>{
    const finalval=finalItems.reduce((prev,curr)=>{
     return prev+=curr.cost
    },0)
    settotal(finalval||0)
  },[finalItems])
  return <div>
    <div>
      {
        finalItems.map((x,index) => {
          
          return <div key={index}>
            <div className='finalitems'>
              <h3>{x.name}</h3>
              <p><span><i class="bi bi-currency-rupee"></i></span>{x.cost}</p>
            </div>
          </div>
        })
      }
    </div>
    <div className='finalitems pay'><button className='pay1'>click to pay {total}</button></div>
  </div>
}

export default Cart