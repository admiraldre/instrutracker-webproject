import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get('/forum');
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container-post">
            <section className='posts'>
                {posts.map(({ id, title, description, userID }) =>
                    <PostItem key={id} postID={id} title={title} description={description} userID={userID} />)
                }
            </section>
        </div>
    );
};

export default Posts;
