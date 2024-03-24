import React , { useState, useEffect }from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const MaybeShowNavBar = ({children}) => {
    const location = useLocation();
    const [ showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        console.log("this is location: ", location)
        if(location.pathname === '/' || location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/register' || location.pathname === '/login' || location.pathname === '/result'){
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    },[location.pathname]);
  return (
    <div>
        {showNavbar && <Navbar />}
      {children}
    </div>
  )
}

export default MaybeShowNavBar
