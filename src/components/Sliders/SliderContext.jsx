import React from 'react'

const SliderContext = () => {
    return (
            <article className='flex flex-col gap-3'>
                <h2 className='text-white text-4xl font-extrabold leading-tight'>
                    Fresh Flowers, Thoughtfully Arranged
                </h2>
                <p className='text-gray-300 text-md'>
                    Seasonal blooms crafted for everyday moments and meaningful occasions. Sourced <br />
                    responsibly and arranged with care.
                </p>
                <button className='flex items-start text-gray-200 bg-blue-500 w-max px-4 py-2 rounded'>Shop Flowers</button>
            </article>
    )
}

export default SliderContext