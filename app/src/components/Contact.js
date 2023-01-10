import '../styles/Contact.css';
import useOnScreen from '../hooks/useOnScreen';
import { useRef } from 'react';
import useNav from '../hooks/useNav';
import { AiOutlineMail } from 'react-icons/ai';


const Contact = () => {
    const contactRef = useNav('Contact');
    useOnScreen(contactRef);

    return (
        <section ref={contactRef} id='Contact' className='contact-section'>
            <div className='contact-container'>
                <div className='contact-title-container'>
                    <div className='contact-title'/>
                </div>
                <div className='contact-email'>
                    <a href='mailto:reececura@gmail.com'><AiOutlineMail className='contact-icon'/></a>
                    <div className='contact-tag'>
                        reececura@gmail.com
                    </div>
                </div>
            </div>
            <div className='creator-footer'>
                <p>Created by <a href='mailto:cml82@students.uwf.edu' className='creator-link'>Chase Lamkin</a></p>
            </div>
        </section>
    );
}

export default Contact