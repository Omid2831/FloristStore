import React from 'react'
import ShopContext from './ShopContext'

const Shops = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full py-14 px-8'>
            <img
                src="https://images.unsplash.com/photo-1488508872907-592763824245?w=800&h=400&fit=crop"
                alt="Flower Shop"
                className='w-full h-full object-cover'
            />
            <ShopContext />
        </section>
    )
}

export default Shops