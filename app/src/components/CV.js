import '../styles/CV.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef, useEffect, useState } from 'react';
import useNav from '../hooks/useNav';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CV = () => {
    const [onScreen, setOnScreen] = useState(false);
    const cvRef = useNav('CV');
    const intersectionRef = useRef(null);
    useOnScreen(cvRef);

    useEffect(() => {

       Aos.init({duration: 1500, once: true});
        
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setOnScreen(true);
            }
        });
        observer.observe(intersectionRef.current);
        return () => observer.disconnect();
    }, []);
    
    return (
        <>
            <div className='cv-title-container'>
                <div className='cv-title' />
            </div>
            <section ref={cvRef} id='CV' className='cv-section'>
                <div ref={intersectionRef} className='cv-intersection-point' />
                <div className={`cv-line ${onScreen ? 'cv-line-animate' : ''}`} />
                <>
                    <div className='cv-dot-1' />
                    <div className='cv-theatre-title' data-aos='fade-up' data-aos-delay='200'>
                        Theatre
                    </div>
                    <div className='theatre-container' data-aos='fade-up' data-aos-delay='200'>
                        <div className='cv-list-left'>
                            <div className='cv-list-item-left'>
                                A Doll's House Part 2 - Nora - UWF
                            </div>
                            <div className='cv-list-item-left'>
                                The Lion the Witch and the Wardrobe - Wood Nymph - UWF
                            </div>
                            <div className='cv-list-item-left'>
                                Why Do We Laugh - Meredith - Teco Theatre Tampa, FL
                            </div>
                            <div className='cv-list-item-left'>
                                Radium Girls - Irene - Pensacola FL
                            </div>
                            <div className='cv-list-item-left'>
                                Tracks - High School Girl - Mattie Kelly Arts Center
                            </div>
                            <div className='cv-list-item-left'>
                                Spoon Riber - Rosie - Tampa Convention Center
                            </div>
                            <div className='cv-list-item-left'>
                                The Crucible - Betty - Pensacola, FL
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div className='cv-dot-2' />
                    <div className='cv-training-title' data-aos='fade-up' data-aos-delay='200'>
                        Training
                    </div>
                    <div className='training-container' data-aos='fade-up' data-aos-delay='200'>
                        <div className='cv-list-right'>
                            <div className='cv-list-item-right'>
                                University of West Florida - Acting - Marci Duncan
                            </div>
                            <div className='cv-list-item-right'>
                                University of West Florida - Script Analysis - Glenn Breed
                            </div>
                            <div className='cv-list-item-right'>
                                STRAZ Center for Performing Arts - Pantomime - Tampa FL
                            </div>
                            <div className='cv-list-item-right'>
                                STRAZ Center for Performing Arts - Movement - Tampa FL
                            </div>
                            <div className='cv-list-item-right'>
                                Pensacola Theatre - Acting - Alita Brooks
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div className='cv-dot-3' />
                    <div className='cv-skills-title' data-aos='fade-up' data-aos-delay='200'>
                        Skills
                    </div>
                    <div className='skills-container' data-aos='fade-up' data-aos-delay='200'>
                        <div className='cv-list-left'>
                            <div className='cv-list-item-left'>
                                Athletic: freestyle swimming, boxing, cartwheel/roundoff, football passing, horseback riding, fishing
                            </div>
                            <div className='cv-list-item-left'>
                                Performance: firearm handling/shooting, pointe ballet, hula hoop
                            </div>
                            <div className='cv-list-item-left'>
                                Language: Southern, New York, Filipino, Vietnamese, English, Aussie dialects
                            </div>
                        </div>
                    </div>
                </>
                <>
                    <div className='cv-dot-4' />
                    <div className='cv-webmedia-title' data-aos='fade-up' data-aos-delay='200'>
                        Web Media
                    </div>
                    <div className='webmedia-container' data-aos='fade-up' data-aos-delay='200'>
                        <div className='cv-list-right'>
                            <div className='cv-list-item-right'>
                                Holiday Hair Show - Hair Model - Dir. Joshua McAllister
                            </div>
                        </div>
                    </div>
                </>
            </section>
        </>
    );
}

export default CV
