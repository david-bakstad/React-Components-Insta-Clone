import React, { useState } from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { data, setData } = useState(props.data);
  console.log(props)
  return (
    <div className='post-border'>
      <PostHeader
        username={props.data.username}
        thumbnailUrl={props.data.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.data.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      {<LikeSection likePost={() => props.likePost(props.data.id)} />}
      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;
