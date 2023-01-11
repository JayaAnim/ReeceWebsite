import '../styles/About.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef, useEffect, useState } from 'react';
import useNav from '../hooks/useNav';
import { NavContext } from '../context/navContext';
import { useContext } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const cardRef = useRef(null);
    const aboutRef = useNav('About');
    useOnScreen(aboutRef);

    const { activeLinkId } = useContext(NavContext);
    useEffect(() => {
        if (activeLinkId === 'About') {
            cardRef.current.classList.add('in-view');
        }
        else {
            cardRef.current.classList.remove('in-view');
        }

    }, [activeLinkId]);

    useEffect(() => {
        Aos.init({duration: 1000, once: false});
    }, []);

    return (

        <section ref={aboutRef} id='About' className='about-section'>
            <div className='about-title-container'>
                <div className='about-title'/>
            </div>
            <div className='about-card-container'>
                <div className='about-card-sub-container'>
                    <div ref={cardRef} className='about-card'>
                        <div className='top-line'/>
                        <div className='bottom-line'/>
                        <div data-aos='zoom-out'>As an aspiring actor, I am passionate about the art of storytelling and the power of performance to transport audiences to new worlds. I am dedicated to bringing characters to life and connecting with audiences on an emotional level through film, television, and theater. I am constantly working to improve my craft and take on new, challenging roles that allow me to showcase my range and versatility. I am confident that my passion, dedication, and hard work will take me far in this industry and I am excited to see where my journey as an actor will lead me.</div> 
                    </div>
                </div>
            </div>
        </section>
    )
}
// const { activeLinkId } = useContext(NavContext);
export default About