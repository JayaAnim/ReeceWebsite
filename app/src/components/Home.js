import '../styles/Home.css'
import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import useNav from '../hooks/useNav';

const Home = () => {
    const homeRef = useNav('Home');
    useOnScreen(homeRef);

    return (
        <section ref={homeRef} id='Home' className='home-section'>
            <div className='home-image-container'>

            </div>
            
        </section>
    );
}

export default Home