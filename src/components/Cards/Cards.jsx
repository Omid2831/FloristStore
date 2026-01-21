import { cardData } from './cardData'

const Cards = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8'>
            {/* Card Content */}
            {cardData.map((card) => (
                <div key={card.id} className='bg-white shadow-md rounded-lg p-4'>
                    <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                    <p className="text-gray-600">{card.description}</p>
                </div>
            ))}
        </section>
    )
}

export default Cards