import '../styles/Photos.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef } from 'react';
import useNav from '../hooks/useNav';

const Photos = () => {
    const photosRef = useNav('Photos');
    useOnScreen(photosRef);

    return (
        <section ref={photosRef} id='Photos' className='photos-section'>
            Photos
        </section>
    );
}

export default Photos