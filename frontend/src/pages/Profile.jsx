import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const DUMMY_POSTS = [
    {
        id: '1',
        title: 'First post tehe',
        description: 'This is my first ever post description whatever',
        userID: 2
    }]

const Profile = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    return (
        <Sidebar>
            <div className="profilepage">
                <div className='page-title'>My Profile</div>
                <h1>{!!user && (<h2>{user.name}</h2>)}</h1>
                <section className='myPosts'>
                    {
                        posts.length ? <div className="userposts">
                            {
                                posts.map(post => {
                                    <article key={post.id} className='currentuserpost'>
                                        <div className='currentuserpost-info'>
                                            <h5>{post.title}</h5>
                                        </div>
                                        <div className='currentuserpost-actions'>
                                            <Link to={`/forum/${post.id}`}>View</Link>
                                            <Link to={`/forum/${post.id}/edit`}>Edit</Link>
                                            <Link to={`/forum/${post.id}/delete`}>Delete</Link>
                                        </div>
                                    </article>
                                })
                            }
                        </div> : <h2>You have no posts yet.</h2>
                    }
                </section>
            </div>
        </Sidebar>

    )
}

export default Profile
