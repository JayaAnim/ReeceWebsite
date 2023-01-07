import styles from '../styles/Navbar.css'
import { NavContext } from '../context/navContext';
import { useContext, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
const Navbar = () => {
    const { activeLinkId } = useContext(NavContext);

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
                                        className={ activeLinkId === link ? 'button-active' : 'button-inactive'}
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