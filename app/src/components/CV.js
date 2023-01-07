import '../styles/CV.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef, useEffect, useState } from 'react';
import useNav from '../hooks/useNav';

const CV = () => {
    const [onScreen, setOnScreen] = useState(false);
    const cvRef = useNav('CV');
    const intersectionRef = useRef(null);
    useOnScreen(cvRef);

    useEffect(() => {
        
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
                <div className='cv-dot-1' />
                <div className='cv-dot-2' />
                <div className='cv-dot-3' />
                <div className='cv-dot-4' />
                <div className='theatre-container'>
                    <div className='cv-content-right'>
                    </div>
                </div>
                <div className='training-container'>
                    <div className='cv-content-left'>
                        <div className='cv-container-title'>Training</div>
                        <ul className='cv-list-left'>
                            <li>
                                University of West Florida --- Acting --- Marci Duncan
                            </li>
                            <li>
                                University of West Florida --- Script Analysis --- Glenn Breed
                            </li>
                            <li>
                                STRAZ Center for Performing Arts --- Pantomime --- Tampa, FL
                            </li>
                            <li>
                                Pensacola Theatre --- Acting --- Alita Brooks
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='skills-container'>
                    <div className='cv-content-right'>

                    </div>
                </div>
                <div className='web-media-container'>
                    <div className='cv-content-left'>

                    </div>
                </div>
            </section>
        </>
    );
}

export default CV
