import React, { useState } from 'react';
import PostUser from './PostUser';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

const PostItem = ({ postID, title, description, userID }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = async () => {
        try {
            const response = await axios.post(`/forum/${postID}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, 
                },
            });
            setLiked(!liked);
        } catch (error) {
            console.error('Error toggling like', error);
        }
    };

    return (
        <div>
            <br />
            <article className='post'>
                <div className='post-content'>
                    <big>{title}</big>
                    <p>{description}</p>
                    <div className='post-info'>
                        <PostUser userID={userID} /> 
                        <div className="like-comment">
                            <button onClick={toggleLike}>
                                {liked ? <AiIcons.AiFillLike /> : <AiIcons.AiOutlineLike />}
                            </button>
                            <button><FaIcons.FaRegCommentDots /></button>
                        </div>
                    </div>
                </div>
            </article> <br />
        </div>
    );
};

export default PostItem;
