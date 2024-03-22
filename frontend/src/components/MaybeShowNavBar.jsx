import React , { useState, useEffect }from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const MaybeShowNavBar = ({children}) => {
    const location = useLocation();
    const [ showNavbar, setShowNavbar] = useState(false);
    useEffect(() => {
        console.log("this is location: ", location)
        if(location.pathname === '/dashboard'){
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
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
