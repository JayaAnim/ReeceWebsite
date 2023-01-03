import '../styles/About.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef } from 'react';
import useNav from '../hooks/useNav';

const About = () => {
    const aboutRef = useNav('About');
    useOnScreen(aboutRef);

    return (
        <section ref={aboutRef} id='About' className='about-section'>
            About
        </section>
    )
}

export default About