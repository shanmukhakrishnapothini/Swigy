import React from 'react'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'

function NavBar() {
    const data=useSelector((state)=>state.cart.items.length)
    return (
        <div className='navbar'>
            <div className='image'>
                <Link className='link' to='/Home'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk50Ut-wJKwbca3BTPssDUl_fqnsEE_D2tcw&s" alt="swiggy"/></Link>
                <p>other</p>
            </div>
            <ul>
                <Link className='link' to='/SwiggyCorporate'><li><i className="bi bi-suitcase-lg"></i> Swiggy Corporate</li></Link>
                <Link className='link' to='/search'> <li><i className="bi bi-search"></i> Search</li></Link>
                <Link className='link' to='/Offer'><li><i className="bi bi-percent"></i> Offers</li></Link>
                <Link className='link' to='/Help'><li><i className="bi bi-question"></i> help</li></Link>
                <Link className='link' to='/Signin'><li><i className="bi bi-person"></i> Signin </li></Link>
                <Link className='link' to='/Cart'><li><i className="bi bi-cart-plus"></i> Cart {data}</li></Link>  
            </ul>
        </div>
    )
}

export default NavBar