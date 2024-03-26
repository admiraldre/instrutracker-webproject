import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { UserContext } from '../../context/userContext';

const Forum = () => {
    const [forumTitle, setForumTitle] = useState('');
    const [forumMessage, setForumMessage] = useState('');
    const [commentText, setCommentText] = useState({}); 
    const [posts, setPosts] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('/forum');
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleTitleChange = (event) => setForumTitle(event.target.value);
    const handleMessageChange = (event) => setForumMessage(event.target.value);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!user) {
            console.error("User not found. Please log in.");
            return;
        }
        try {
            await axios.post('/forum', {
                title: forumTitle,
                description: forumMessage,
                userName: user.name, 
            });
            fetchPosts(); 
            setForumTitle('');
            setForumMessage('');
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const handleLike = async (postId) => {
        if (!user) {
            console.error("User not found. Please log in.");
            return;
        }
        try {
            await axios.post(`/forum/${postId}/like`, { userId: user._id });
            fetchPosts();
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };

    const handleAddComment = async (postId) => {
        if (!user) {
            console.error("User not found. Please log in.");
            return;
        }
        try {
            await axios.post(`/forum/${postId}/comments`, {
                text: commentText[postId],
                author: user._id, 
            });
            fetchPosts();
            setCommentText({ ...commentText, [postId]: '' }); 
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    const handleCommentChange = (postId, text) => {
        setCommentText({ ...commentText, [postId]: text });
    };

    return (
        <Sidebar>
            <div className="forumpage">
                <header className="App-header">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Forum Title:</label>
                            <input type="text" id="title" value={forumTitle} onChange={handleTitleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Forum Message:</label>
                            <textarea id="message" value={forumMessage} onChange={handleMessageChange}></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                    <div className="display-area">
                        {posts.map(post => (
                            <div key={post._id}>
                                <h2>{post.title}</h2>
                                <p>Posted by: {post.userName}</p> 
                                <p>{post.description}</p>
                                <button onClick={() => handleLike(post._id)}>Like</button> {post.likes?.length || 0}

                                <div>
                                    {post.comments.map((comment, index) => (
                                        <p key={index}>{comment.text} - {comment.author}</p>
                                    ))}
                                    <input
                                        type="text"
                                        value={commentText[post._id] || ''}
                                        onChange={(e) => handleCommentChange(post._id, e.target.value)}
                                        placeholder="Add a comment..."
                                    />
                                    <button onClick={() => handleAddComment(post._id)}>Comment</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </header>
            </div>
        </Sidebar>
    );
};

export default Forum;