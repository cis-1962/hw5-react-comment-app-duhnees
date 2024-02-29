import { useState } from "react";
import { CommentProps, RecursiveProp } from "./typeProps";
import { TextInput } from "./commentInput";
import { Votes } from "./votes";
import './comment.css';

const IndividualComment = ({ username, content } : CommentProps) => {
    return (
      <div className="within-comment">
        <div>
          <p className="username">{username}</p>
          <p className="comment">{content}</p>
        </div>
        <Votes />
      </div>
    );
  };

export const RecursivelyRenderedComment = ({ comment }: RecursiveProp) => {
    const [showTextInput, setShowTextInput] = useState(false);

    const marginLeft = comment.depth * 10;
    const maxWidth = 500 - (marginLeft * 4);

    if (comment.depth === 2) {
        return (
        <div className="comment-container-individual" style={{ marginLeft, maxWidth }}>
            <IndividualComment username={comment.username} content={comment.content} />
        </div>
        );
    }

    return (
        <div className="comment-container-individual" style={{ marginLeft, maxWidth }}>
            <IndividualComment username={comment.username} content={comment.content} />
            {!showTextInput && <button className="button" onClick={() => setShowTextInput(true)}>Reply</button>}
            {showTextInput && <TextInput comments={comment.children} depth={comment.depth + 1} />}
            {comment.children.map((elem, index) => (<RecursivelyRenderedComment key={index} comment={elem[0]} />))}
        </div>
    );
};