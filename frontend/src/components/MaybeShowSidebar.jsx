import React , { useState, useEffect }from 'react'
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const MaybeShowSidebar = ({children}) => {
    const location = useLocation();
    const [ showSidebar, setShowSidebar] = useState(false);
    useEffect(() => {
        console.log("this is location: ", location)
        if(location.pathname === '/dashboard' || location.pathname === '/settings' ){
            setShowSidebar(true);
        } else {
            setShowSidebar(false);
        }
    },[location.pathname]);
  return (
    <div>
        {showSidebar && <Sidebar />}
      {children}
    </div>
  )
}

export default MaybeShowSidebar
