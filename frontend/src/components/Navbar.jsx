import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../components/Navbar.css'

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className='navBar'>
        <Link to='/' className='site-title'>InstruTracker</Link>
        <div className='menu' onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <span />
          <span />
          <span />
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <button className='logsign' onClick={() => navigate('/login')}>Log in</button>
        </ul>
      </nav>
    </div>
  )
}

