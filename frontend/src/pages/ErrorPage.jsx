import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return(
        <div className='error'>
            <h1>ERROR 404: Page not found.</h1>
            <br/>
            <h3>Go back to the <Link to='/'>Homepage.</Link></h3>
        </div>
    );
};

export default ErrorPage;