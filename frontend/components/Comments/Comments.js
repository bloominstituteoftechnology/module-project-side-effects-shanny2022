import React from 'react';
import Comment from './Comment';

const Comments = props => {
  const { comments } = props;

  return (
    <div className='comments-wrapper'>
      {comments.map((comment, index) => <Comment key={index} comment={comment} />)}
    </div>
  );
};

export default Comments;
