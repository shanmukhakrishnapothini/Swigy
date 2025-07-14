import React from 'react'
import Scroller1 from '../components/homecomponents/Scroller/Scroller1'
import Scroller2 from '../components/homecomponents/Scroller/Scroller2'
import Menu from '../../src/components/restomenu/Menu'

function Home() {

  return (
    <div>
        <Scroller1/>
        <Scroller2/>
        <Menu/>
    </div>
  )
}

export default Home