import React from 'react';
import Post from './Post';

const Posts = (props) => {
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map((post, index) => <Post key={index} post={post} likePost={likePost} />)}
    </div>
  );
};

export default Posts;
