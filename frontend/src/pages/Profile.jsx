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

const Profile = () => {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState(DUMMY_POSTS);
    return (
        <Sidebar>
            <div className="profilepage">
                <div className="profile-top">
                    <div className='page-title'>My Profile</div>
                    <h1>{!!user && (<h1>{user.name}'s Posts</h1>)}</h1>
                </div>

                <section className='myPosts'>
                    {
                        posts.length ? <div className="userposts">
                            {
                                posts.map(post => (
                                    <article key={post.id} className='currentuserpost'>
                                        <div className='currentuserpost-info'>
                                            <h5>{post.title}</h5>
                                        </div>
                                        <div className='currentuserpost-actions'>
                                            <Link to={`/forum/${post.id}`} className='normal-btn'>View</Link>
                                            <Link to={`/forum/${post.id}/edit`} className='edit-btn'>Edit</Link>
                                            <Link to={`/forum/${post.id}/delete`} className='danger-btn'>Delete</Link>
                                        </div>
                                    </article>
                                ))
                            }
                        </div> : <h2>You have no posts yet.</h2>
                    }
                </section>
            </div>
        </Sidebar>

    )
}

export default Profile
