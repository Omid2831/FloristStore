import { useEffect, useState } from 'react'


const Cards = () => {
    // data to be used for cards
    const url = 'data/categories.json';
    // 1. use state
    const [data, SetData] = useState([]);

    // 2. fetch data from local file
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const jsonData = await res.json();
                SetData(jsonData);
                console.log('Card Data:', jsonData);
            } catch (error) {
                console.error('Error fetching card data:', error);
            }
        }
        fetchData();
    }, []);
    return (
        <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8'>
            {/* Card Content */}
            {data.map((card) => (
                <article key={card.id} className='bg-white shadow-md rounded-lg p-4'>
                    <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                    <p className="text-gray-600">{card.description}</p>
                </article>
            ))}
        </section>
    )
}

export default Cards