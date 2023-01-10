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
    const [disabled, setDisabled] = useState(false);
    const cardRef = useRef(null);

    function scrollRight() {
      setDisabled(true);
      if (containerRef.current.scrollLeft + containerRef.current.offsetWidth >= containerRef.current.scrollWidth - 10) {
        // If at the end, scroll to the start
        containerRef.current.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
        setTimeout(() => {
            setDisabled(false);
        }, 1000);
      } else {
        // Otherwise, scroll to the next element
        containerRef.current.scrollBy({
          left: cardRef.current.offsetWidth + 15,
          behavior: 'smooth'
        });
        setTimeout(() => {
            setDisabled(false);
        }, 250);
      }
    }
  
    function scrollLeft() {
      setDisabled(true);
      if (containerRef.current.scrollLeft <= 10) {
        // If at the start, scroll to the end
        containerRef.current.scrollTo({
          left: containerRef.current.scrollWidth,
          behavior: 'smooth'
        });
        setTimeout(() => {
            setDisabled(false);
          }, 1000);
      } else {
        // Otherwise, scroll to the previous element
        containerRef.current.scrollBy({
          left: -cardRef.current.offsetWidth - 15,
          behavior: 'smooth'
        });
        setTimeout(() => {
            setDisabled(false);
        }, 250);
      }
    } 

    return (
        <div className='carousel-container'>
            <BsArrowLeftCircle  className={`carousel-icon ${disabled ? 'disabled-icon' : ''}`} onClick={scrollLeft}/>
            <BsArrowRightCircle className={`carousel-icon ${disabled ? 'disabled-icon' : ''}`} onClick={scrollRight}/>
            <div ref={containerRef} className='carousel'>
                <img ref={cardRef} src={headshot1} alt='reece headshot'/>
                <img src={headshot2} alt='reece headshot'/>
                <img src={headshot3} alt='reece headshot'/>
                <img src={headshot4} alt='reece headshot'/>
                <img src={headshot5} alt='reece headshot'/>
                <img src={headshot6} alt='reece headshot'/>
                <img src={headshot7} alt='reece headshot'/>
                <img src={headshot8} alt='reece headshot'/>
                <img src={headshot9} alt='reece headshot'/>
            </div>
        </div>
    );
}

export default Carousel;