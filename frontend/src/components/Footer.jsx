import './Footer.css'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (

            <footer>
                <div className='footer-content'>
                    <ul className='links'>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='footer-bottom'>
                    <p>&copy;2024 InstruTracker Inc. | All rights reserved | Developed and Designed by <span><Link to='https://www.linkedin.com/in/andrei-vivar/'>Andrei Vivar</Link></span></p>
                </div>
            </footer>


    );
};