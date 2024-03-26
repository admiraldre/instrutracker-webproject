import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios'; 
import Posts from '../components/Posts';

const Forum = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/forum', { title, description });
            console.log(data);
        } catch (error) {
            console.error('Error creating post', error);
        }
    };

    return (
        <div>
            <Sidebar>
                <div className='forumPage'>
                    <div className='page-title'>Public Forum</div><br />
                    <form className='create-post' onSubmit={handleSubmit}>
                        <input className='input-post'
                            placeholder='Write the title of your post'
                            value={title} onChange={(e) => setTitle(e.target.value)} />
                        <textarea className='input-postdesc'
                            placeholder='Write what you have in mind'
                            value={description} onChange={(e)=> setDescription(e.target.value)} />
                        <button className='postButton' type='submit'>Post</button>
                    </form><br/>
                    <div className='publicFeed'>
                        <h1>See what the others are doing...</h1>
                    </div>
                    <Posts />
                </div>
            </Sidebar>
        </div>
    );
};

export default Forum;
