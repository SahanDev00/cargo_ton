import React from 'react'
import Hero from '../Components/Hero'
import Logos from '../Components/Logos'
import News from '../Components/News'
import Services from '../Components/Services'
import Stats from '../Components/Stats'
import Testimonials from '../Components/Testimonials'
import Welcome from '../Components/Welcome'

const Home = () => {
    return (
        <div>
            <Hero/>
            <Welcome/>
            <Services/>
            <Stats/>
            <Testimonials/>
            <Logos/>
            <News/>
        </div>
    )
}

export default Home
