import '../styles/About.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef, useEffect, useState } from 'react';
import useNav from '../hooks/useNav';
import paintstroke from '../img/paint-stroke.png';
import { NavContext } from '../context/navContext';
import { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CgProfile } from 'react-icons/cg';


const About = () => {
    const [displayFront, setDisplayFront] = useState(false);
    const [flippedByView, setFlippedByView] = useState(false);
    const nodeRef = useRef(null);
    const aboutRef = useNav('About');
    useOnScreen(aboutRef);

    const { activeLinkId } = useContext(NavContext);
    useEffect(() => {
        if (activeLinkId === 'About' && !flippedByView) {
            setDisplayFront(true);
            setFlippedByView(true);
        }
        else if (activeLinkId !== 'About') {
            setFlippedByView(false);
        }
    }, [activeLinkId, flippedByView, displayFront]);

    return (

        <section ref={aboutRef} id='About' className='about-section'>
            <div className='about-title-container'>
                <div className='about-title'>
                    About Me
                </div>
                <img src={paintstroke} className='about-title-underline' alt='paint stroke underline'/>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor nunc et diam tincidunt, id tempus nibh iaculis. Aliquam erat volutpat. Suspendisse non magna velit. Proin luctus, velit id tempor luctus, magna quam pretium nisi, a consectetur nunc lacus eget turpis. Fusce sit amet nisl eget nibh vehicula fringilla ac non turpis. Suspendisse potenti. Proin tincidunt nisi a semper ullamcorper. Morbi fringilla libero velit, id volutpat massa tincidunt nec.

Nunc interdum orci in dui consequat, vel placerat diam dictum. Morbi euismod quam vel ante dictum, et pharetra orci fermentum. Mauris aliquam cursus massa, id fringilla ante viverra in. Ut ac tellus at risus elementum tristique. Integer ornare dictum volutpat. Morbi vel felis vel quam mollis gravida. Sed nec posuere purus. Integer pellentesque arcu eu tincidunt egestas. Suspendisse nec metus aliquet, tristique nunc ac, placerat diam.
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