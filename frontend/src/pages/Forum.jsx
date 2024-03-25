import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Posts from '../components/Posts';

const Forum = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');

    return (
        <div>
            <Sidebar>
                <div className=''>
                    <div className='page-title'>Public Forum</div><br />
                    <div className='forumPage'>
                        <forum className='create-post'>
                            <input className='input-post'
                                placeholder='Write the title of your post'
                                value={title} onChange={(e) => setTitle(e.target.value)}></input>
                            <textarea className='input-postdesc'
                                placeholder='Write what you have in mind'
                                value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                            <input type='file' onChange={(e)=>setImg(e.target.files[0])} accept='png, jpg, jpeg' className='chooseImg'></input>
                            <button className='postButton' type='submit'>Post</button>
                        </forum><br/>
                        <div className='publicFeed'>
                            <h1>See what the others are doing...</h1>
                        </div>
                        <Posts />
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}

export default Forum
