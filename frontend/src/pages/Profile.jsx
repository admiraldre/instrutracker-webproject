import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';
import axios from 'axios'; 

const Profile = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchUserPosts = async () => {
            if (user) {
                try {
                    const response = await axios.get(`/forum/user/${user.id}`);
                    const userPosts = response.data.filter(post => post.userID === user.id);
                    setPosts(userPosts);
                } catch (error) {
                    console.error("Error fetching user's posts:", error);
                }
            }
        };

        fetchUserPosts();
    }, [user]);

    const handleDelete = async (postId) => {
        try {
            await axios.delete(`/forum/${postId}`);
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <Sidebar>
            <div className="profilepage">
                <div className="profile-top">
                    <div className='page-title'>My Profile</div>
                    {!!user && <h1>{user.name}'s Posts</h1>}
                </div>

                <section className='myPosts'>
                    {posts.length ? (
                        <div className="userposts">
                            {posts.map(post => (
                                <article key={post.id} className='currentuserpost'>
                                    <div className='currentuserpost-info'>
                                        <h5>{post.title}</h5>
                                        <p>{post.description}</p>
                                    </div>
                                    <div className='currentuserpost-actions'>
                                        <button className='normal-btn'>View</button>
                                        <button className='edit-btn'>Edit</button>
                                        <button onClick={() => handleDelete(post.id)} className='danger-btn'>Delete</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : <h2>You have no posts yet.</h2>}
                </section>
            </div>
        </Sidebar>
    );
};

export default Profile;
