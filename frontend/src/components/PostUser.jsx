import React from 'react'
import { Link } from 'react-router-dom'

const PostUser = () => {
  return (
    <div>
      <Link to={'profile/sidfsafafadfa'}className='user_post'>
        <div className="user-post-info">
            <h5>Some One</h5>
            <small>Just Now</small>
        </div>
      </Link>
    </div>
  )
}

export default PostUser
