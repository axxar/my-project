import React from 'react'

const Introduction = () => {
    return (
        <div className='flex h-screen text-white bg-black'>
            <div className='flex items-center justify-center'>
                <div className='p-12 h-1/2 flex flex-col'>
                    <h1 className='text-2xl h-10'>Hello, I'm</h1>
                    <h1 className='text-6xl font-bold pt-2'>Akshar Patel</h1>
                    <p className='pt-10'>
                        I design and develop services using various technologies.
                    </p>
                    <p className='pt-3'>
                        I am also a photographer by passion.
                    </p>
                </div>
            </div>
            {/* <div className='flex-1 flex items-center justify-center'>
                <div className='p-12 h-1/2 flex flex-col'>
                    <p className='pt-10'>Image Coming Here Soon</p>
                    https://www.youtube.com/watch?v=hQjlM-8C4Ps
                </div>
            </div> */}
        </div>
    )
}

export default Introduction
