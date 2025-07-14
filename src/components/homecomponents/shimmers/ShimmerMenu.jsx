import React from 'react'
function CardMenu() {
  return <div>
    <div className='Scroll_box Shimmer'>

    </div>
  </div>
}
function ShimmerMenu() {
  return (
    <div className='body'>
      <h2>Restaurants with online food delivery in Bangalore</h2>
      <div className='Shimmer3'>
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
      </div>

    </div>
  )
}

export default ShimmerMenu