//I want this to handle the interface for leaving a comment whether it be a new post or a reply
import { useState } from 'react';
import { NameInput, CommentInput, CommentButton } from './inputComponents';
import { PostedComment } from './commentComponent';

export const CommentSubmitForm = () => {
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [postedComments, setPostedComments] = useState([]);

  const handleUserName = (name) => {
    setUserName(name);
  }

  const handleComment = (comment) => {
    setComment(comment);
  }

  const submitComment = () => {
    if (userName.length > 0 && comment.length > 0) {
      setPostedComments([...postedComments, [userName, comment]]);
      setUserName('');
      setComment('');
    }
  }

  return (
    <div>
      <NameInput name={userName} setName={handleUserName} />
      <CommentInput comment={comment} setComment={handleComment} />
      <CommentButton clickFunction={submitComment} />
      <p>Comments: </p>
      {postedComments.map((elem, index) => (<PostedComment key={index} username={elem[0]} comment={elem[1]} />))}
    </div>
  );
}
