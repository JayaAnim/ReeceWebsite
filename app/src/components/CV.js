import '../styles/CV.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef } from 'react';
import useNav from '../hooks/useNav';

const CV = () => {
    const cvRef = useNav('CV');
    useOnScreen(cvRef);

    return (
        <section ref={cvRef} id='CV' className='cv-section'>
            CV
        </section>
    );
}

export default CV