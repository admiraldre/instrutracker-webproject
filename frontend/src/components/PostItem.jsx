import React, { useState } from 'react'
import PostUser from './PostUser';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'

const PostItem = ({ postID, title, description, userID }) => {
    const [like, setLike] = useState();

    return (
        <div>
            <br />
            <article className='post'>
                <div className='post-content'>
                    <big>{title}</big>
                    <p>{description}</p>
                    <div className='post-info'>
                        <PostUser />
                        <div className="like-comment">
                            <button><AiIcons.AiOutlineLike /></button>
                            {/* <AiIcons.AiFillLike/> this is for when it's liked!*/}
                            <button><FaIcons.FaRegCommentDots /></button>
                        </div>
                    </div>
                </div>
            </article> <br />
        </div>
    )
}

export default PostItem
