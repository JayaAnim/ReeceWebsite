import styles from '../styles/Navbar.css'
import { NavContext } from '../context/navContext';
import { useContext } from 'react';
const Navbar = () => {
    const { activeLinkId } = useContext(NavContext);
    console.log(activeLinkId);

    const navLinks = ['Home', 'About', 'Photos', 'CV', 'Contact'];

    const handleClick = (content) => {
        document.getElementById(content).scrollIntoView({ behavior: 'smooth'});
    }
    return (
        <header className='nav-header'>
            <div className='nav-container'>
                <div className='nav-sub-container'>
                    <h1 className='nav-logo'>R.C.</h1>
                    <nav>
                        <ul>
                            {navLinks.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <button onClick={() => handleClick(link)}
                                        className={ activeLinkId === link ? 'button-active' : ''}
                                        >{link}</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar