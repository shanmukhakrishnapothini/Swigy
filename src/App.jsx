import React from 'react'
import AppInterface from './AppInterface'
import Search from './pages/Search'
import Offer from './pages/Offers'
import Help from './pages/Help'
import Cart from './pages/Cart'
import Signin from './pages/Signin'
import SwiggyCorporate from './pages/SwiggyCorporate'
import Home from './pages/Home'
import RestoMenu from './components/restomenu/RestoMenu'
import createStore from './redux/createStore'
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Provider store={createStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppInterface />}>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/search' element={<Search />}></Route>
              <Route path='/Offer' element={<Offer />}></Route>
              <Route path='/Help' element={<Help />}></Route>
              <Route path='/SwiggyCorporate' element={<SwiggyCorporate />}></Route>
              <Route path='/Cart' element={<Cart />}></Route>
              <Route path='/Signin' element={<Signin />}></Route>
              <Route path="/city/banglore/:name/:id" element={<RestoMenu />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App