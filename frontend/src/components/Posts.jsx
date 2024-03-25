import React, { useState } from 'react';
import PostItem from './PostItem';

const DUMMY_POSTS = [
    {
        id: '1',
        title: 'First post tehe',
        description: 'This is my first ever post description whatever',
        userID: 2
    },
    {
        id: '2',
        title: 'Second post tehe',
        description: 'This is my second ever post description whatever',
        userID: 1
    },
    {
        id: '3',
        title: 'Third post tehe',
        description: 'This is my third ever post description whatever',
        userID: 8
    },
    {
        id: '4',
        title: 'Fourth post tehe',
        description: 'This is my fourth ever post description whatever',
        userID: 5
    },
    {
        id: '7',
        title: 'Fifth post tehe',
        description: 'This is my fifth ever post description whatever',
        userID: 3
    }

]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS);
    return (
        <div className="container-post">
            <section className='posts'>
                {
                    posts.map(({ id, title, description, userID }) =>
                        <PostItem key={id} postID={id} title={title} description={description} userID={userID} />)
                }
            </section>
        </div>

    )
}

export default Posts
