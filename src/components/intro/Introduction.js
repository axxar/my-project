import React from 'react'
import LandingImage from '../images/LandingImage.jpg'

const Introduction = () => {
    return (
        <div className='flex h-screen text-white bg-black' style={{
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundImage: `url(${LandingImage})`,
          }}>
            <div className='md:flex'>
                <div class="md:shrink-0">
                    <div className="flex h-4/6 ml-10 mt-10">
                        <div className='m-auto'>
                            <h1 className='text-3xl h-10'>Hello, I'm</h1>
                            <h1 className='text-7xl font-bold pt-2'>Akshar Patel</h1>
                            <p className='pt-10'>Software Developer By Profession.</p>
                            <p className='pt-3'>Photographer By Passion.</p>
                            <p className='pt-3'>Gamer By Night.</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-4/6 ml-10 ">
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default Introduction
