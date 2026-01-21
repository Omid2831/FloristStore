import React from 'react'
import SliderContext from './SliderContext'

const Slider = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-4 border-dashed border-gray-300 py-12 px-8'>
            
            <div className='border-4 border-dashed border-gray-400 py-4 px-8 '>
                <SliderContext />
            </div>
        </section>
    )
}

export default Slider