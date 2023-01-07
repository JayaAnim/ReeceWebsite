import '../styles/Photos.css';
import useOnScreen from '../hooks/useOnScreen';
import useNav from '../hooks/useNav';
import Carousel from './Carousel';

const Photos = () => {
    const photosRef = useNav('Photos');
    useOnScreen(photosRef);

    return (
        <section ref={photosRef} id='Photos' className='photos-section'>
            <div className='photos-title-container'>
                <div className='photos-title'/>
            </div>
            <Carousel/>
        </section>
    );
}

export default Photos