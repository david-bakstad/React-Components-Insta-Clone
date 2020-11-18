import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { data, setData } = useState(props.data);
    // console.log(props)
  return (
    <div className='posts-container-wrapper'>
      <Post data={props.data[0]} likePost={props.likePost}/>
      
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
