import React, { useEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import SliderContext from './SliderContext';
import { useState } from 'react';

const Slider = () => {
    // the url to fetch data from local file
    const url = 'data/banners.json';
        // 1. use state
        const [data, SetData] = useState([]);
        // 2. fetch data from local file
        useEffect(() => {
            const fetchData = async () => {
                try{
                    const res = await fetch(url);
                    const jsonData = await res.json();
                    SetData(jsonData);
                    console.log('Slider Data:', jsonData);
                }catch(error){
                    console.error('Error fetching slider data:', error);
                }
            }
            fetchData();
        }, []);
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
                loop={false}
                className='h-96 w-full shadow-md'
            >
                {data && data.length > 0 ? (
                    data.map((slide) => (
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