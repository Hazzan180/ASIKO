import React from 'react'
import Router from '../../Routers/Router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layer = () => {
  return (
    <>
      <Header/>
      
      <div>
        <Router />
      </div>

      <Footer />
    </>
  )
}

export default Layer
