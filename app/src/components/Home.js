import '../styles/Home.css'
import { useRef, useState, useEffect } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import useNav from '../hooks/useNav';
import homebackground from '../img/home-background.png';

const Home = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const homeRef = useNav('Home');
    useOnScreen(homeRef);
    const carouselRef = useRef();

    const words = ['Performer.', 'Actor.', 'Model.'];

    useEffect(() => {
        if (!mounted) {
            setMounted(true);
            setTimeout(() => {
                carouselRef.current.classList.add('home-sub-title-open');
            }, 500);

            setTimeout(() => {
                carouselRef.current.classList.remove('home-sub-title-open');
            }, 1000);
        }
        const interval = setInterval(() => {
            carouselRef.current.classList.toggle('home-sub-title-open');
            setWordIndex((wordIndex + 1) % words.length);
            setTimeout(() => {
                carouselRef.current.classList.toggle('home-sub-title-open');
            }, 1500);
        }, 2500);

        return () => clearInterval(interval);
    }, [wordIndex, mounted, carouselRef]);

    return (
        <section ref={homeRef} id='Home' className='home-section'>
            <div className='home-image-container'>
                <img src={homebackground} alt='portrait' className='home-image'/>
                <div className='home-image-blur'/>
            </div>
            <div className='home-title-container'>
                <div className='home-welcome-container'>
                    <div className='home-welcome-line'/>
                    <span className='home-welcome'>
                        Welcome, I'm
                    </span>
                </div>
                <h1 className='home-title'>Reece Cura</h1>
                <div>
                    <span ref={carouselRef} className='home-sub-title'>
                        {words[wordIndex]}
                    </span>
                </div>
            </div>

        </section>
    );
}

export default Home

/*
            <img src={homebackground} className='home-image'/>
            <div className='home-title-container'>
                <h1 className='home-title'>
                    Reece Surname
                </h1>
            </div>
*/
