import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg,
         HeroContent, HeroH1, HeroP, 
         HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroStyles'
import { Button } from '../ButtonStyle'

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Akshar,<br/>A Software Developer.</HeroH1>
                <HeroP>
                    Welcome to my world!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
