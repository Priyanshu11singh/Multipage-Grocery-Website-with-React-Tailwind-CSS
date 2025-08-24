
import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{backgroundImage: `url(${FreshFruits})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10'>
            <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
            <div className='max-w-[700px]'>
                <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold mt-2'>First Order Discount!</h3>
                <p className='text-zinc-600 my-6'>
                    Shop smarter with us – where freshness meets savings! From farm-fresh fruits and vegetables to daily essentials like dairy, meat, and seafood, we bring you quality you can trust at prices your wallet will love.
                </p>
                <Button content="Get a Discount"/>
            </div>
        </div>

    </section>
  )
}

export default Discount
