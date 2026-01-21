import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { sliderData } from './SliderData';
import SliderContext from './SliderContext'

const Slider = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-4 border-dashed border-gray-300 py-12 px-8 gap-5'>
            <div className='flex justify-center items-center border-4 border-dashed border-gray-400 py-4 px-8 '>
                <SliderContext />
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                }}
                loop={true}
                className='h-96 w-full shadow-md'
            >
                {sliderData && sliderData.length > 0 ? (
                    sliderData.map((slide) => (
                        <SwiperSlide key={slide.id} className='w-full relative'>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white'>
                                <h2 className='text-4xl md:text-5xl font-bold mb-4'>{slide.title}</h2>
                                <p className='text-xl md:text-2xl'>{slide.subtitle}</p>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p>
                        No slides available right now.
                    </p>
                )}
            </Swiper>
        </section>
    )
}

export default Slider