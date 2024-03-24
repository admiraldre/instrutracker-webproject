import React from 'react';
import Sidebar from '../components/Sidebar';

const Forum = () => {
    return (
        <div>
            <Sidebar>
                <div className='container'>
                    <h1>This is the Public Forum section:</h1>
                    <forum className='create-post'>
                        <input className='input-post' placeholder='Write what is on your mind?'></input>
                    </forum>
                </div>
            </Sidebar>
        </div>
    )
}

export default Forum
