import '../styles/Carousel.css';
import { useState, useRef, useEffect } from 'react';
import headshot1 from '../img/headshot1.jpg';
import headshot2 from '../img/headshot2.jpg';
import headshot3 from '../img/headshot3.jpg';
import headshot4 from '../img/headshot4.jpg';
import headshot5 from '../img/headshot5.jpg';
import headshot6 from '../img/headshot6.jpg';
import headshot7 from '../img/headshot7.jpg';
import headshot8 from '../img/headshot8.jpg';
import headshot9 from '../img/headshot9.jpg';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Carousel = () => {
    const containerRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);

    const scrollLeft = () => {
        //do nothing
    }

    return (
        <div className='carousel-container'>
            <BsArrowLeftCircle className='carousel-icon' onClick={scrollLeft}/>
            <BsArrowRightCircle className='carousel-icon'/>
            <div ref={containerRef} className='carousel'>
                <img src={headshot1} alt='reece headshot' className='after'/>
                <img src={headshot2} alt='reece headshot' className='active-1'/>
                <img src={headshot3} alt='reece headshot' className='active-2'/>
                <img src={headshot4} alt='reece headshot' className='active-3'/>
                <img src={headshot5} alt='reece headshot' className='waiting'/>
                <img src={headshot6} alt='reece headshot' className='waiting'/>

            </div>

        </div>
    );
}

export default Carousel;