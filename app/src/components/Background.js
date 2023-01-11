import '../styles/Background.css';
import projector from '../img/projector-background.png';

const Background = () => {
    return (
        <div className='site-background'>
            <div className='background-cover'/>
            <img className='site-background-image' src={projector}/>
            
        </div>
    );
}

export default Background;