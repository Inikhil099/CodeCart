import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollection from '../components/products/GenderCollection'
import NewArrivals from '../components/products/NewArrivals'
import ProductDetails from '../components/products/ProductDetails'

const Home = () => {
  return (
    <div className='border-none outline-none border-green-400'>
        <Hero/>
        <GenderCollection/>
        <NewArrivals/>
        <h2 className="text-3xl text-center font-bold mb-4">
          Best Seller
        </h2>
        <ProductDetails/>
    </div>
  )
}

export default Home