import '../styles/About.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef, useEffect, useState } from 'react';
import useNav from '../hooks/useNav';
import paintstroke from '../img/paint-stroke.png';
import { NavContext } from '../context/navContext';
import { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CgProfile } from 'react-icons/cg';
import TypeWriter from 'typewriter-effect';

const aboutString = 'As an aspiring actor, I am passionate about the art of storytelling and the power of performance to transport audiences to new worlds. I am dedicated to bringing characters to life and connecting with audiences on an emotional level through film, television, and theater. I am constantly working to improve my craft and take on new, challenging roles that allow me to showcase my range and versatility. I am confident that my passion, dedication, and hard work will take me far in this industry and I am excited to see where my journey as an actor will lead me.';

const About = () => {
    const [displayFront, setDisplayFront] = useState(false);
    const [flippedByView, setFlippedByView] = useState(false);
    const [initTyping, setInitTyping] = useState(false);
    const nodeRef = useRef(null);
    const aboutRef = useNav('About');
    useOnScreen(aboutRef);

    const { activeLinkId } = useContext(NavContext);
    useEffect(() => {
        if (activeLinkId === 'About' && !flippedByView) {
            setDisplayFront(true);
            setInitTyping(true);
            setFlippedByView(true);
        }
        else if (activeLinkId !== 'About') {
            setFlippedByView(false);
        }
    }, [activeLinkId, flippedByView, displayFront, initTyping]);

    return (

        <section ref={aboutRef} id='About' className='about-section'>
            <div className='about-title-container'>
                {/*
                <div className='about-title'>
                    About Me
                </div>
                <img src={paintstroke} className='about-title-underline' alt='paint stroke underline'/>
                */}
                <div className='about-title'/>
            </div>
            <div className='about-card-container'>
                <div className='about-card-sub-container'>
                    <CSSTransition
                        nodeRef={nodeRef}
                        in={displayFront}
                        timeout={300}
                        classNames='flip'
                    >
                        <div ref={nodeRef} className='about-card' onClick={() => setDisplayFront(!displayFront)}>
                            <div className='about-card-front'>
                                {initTyping ?
                                <TypeWriter
                                    onInit={(typewriter) => {
                                        typewriter
                                        .pauseFor(1000)
                                        .changeDelay(45)
                                        .typeString(aboutString)
                                        .start();
                                    }}
                                /> : null}
                            </div>
                            <div className='about-card-back'>
                                <CgProfile className='about-icon'/>
                            </div>

                        </div>
                    </CSSTransition>
                </div>
            </div>
        </section>
    )
}
// const { activeLinkId } = useContext(NavContext);
export default About