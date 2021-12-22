import React, { useState } from 'react'
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
    const [ isOpen, setIsOpen ]= useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
        </>
    )
}

export default Home;