import '../styles/Contact.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef } from 'react';
import useNav from '../hooks/useNav';

const Contact = () => {
    const contactRef = useNav('Contact');
    useOnScreen(contactRef);

    return (
        <section ref={contactRef} id='Contact' className='contact-section'>
            Contact
        </section>
    );
}

export default Contact