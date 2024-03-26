import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        const newPost = { ...post, id: Date.now(), liked: false };
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    const toggleLike = (postId) => {
        setPosts(posts.map(post => post.id === postId ? { ...post, liked: !post.liked } : post));
    };

    return (
        <PostContext.Provider value={{ posts, addPost, toggleLike }}>
            {children}
        </PostContext.Provider>
    );
};
