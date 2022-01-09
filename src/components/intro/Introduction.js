import React from 'react'

const Introduction = () => {
    return (
        <div className='flex h-screen text-white bg-black'>
            <div className='flex items-center justify-center'>
                <div className='p-12 h-1/2 flex flex-col'>
                    <h1 className='text-2xl h-10'>Hello, I'm</h1>
                    <h1 className='text-6xl font-bold pt-2'>Akshar Patel</h1>
                    <p className='pt-10'>
                        Software Developer By Profession.
                    </p>
                    <p className='pt-3'>
                        Photographer By Passion.
                    </p>
                    <p className='pt-3'>
                        Gamer By Night.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introduction
