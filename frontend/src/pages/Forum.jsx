import React from 'react';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';

const Forum = () => {
    return (
        <div>
            <Sidebar>
                <div className=''>
                <div className='page-title'>Public Forum</div><br/>
                    <div className='forumPage'>
                        <forum className='create-post'>
                            <input className='input-post' placeholder='Write what is on your mind?'></input>
                            <button className='postButton' type='submit'>Post</button>
                        </forum>
                        <div className='publicFeed'>
                            <h1>Here is the public feed</h1>
                        </div>
                        <Posts/>
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}

export default Forum
