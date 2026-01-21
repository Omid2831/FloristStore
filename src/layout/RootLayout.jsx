import React from 'react'
import Header from '../components/Header'
const RootLayout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col overflow-y-hidden'>
            {/** Header content */}
            <Header />
            <main className="border-4 border-dashed flex-1">
                { children }
            </main>
        </div>
    )
}

export default RootLayout