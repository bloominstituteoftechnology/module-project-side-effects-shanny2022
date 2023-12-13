/* eslint-disable no-unused-vars */
/*
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Posts from '../Posts/Posts';
import data from '../../data/dummy-data';

const App = () => {
  const [posts, setPosts] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  const likePost = postId => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className='App'>
      <SearchBar />
      <Posts likePost={likePost} posts={posts}/>
    </div>
  );
};

export default App;
