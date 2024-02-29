import { useState } from "react";
import { InputProps, RecursiveProp } from "./typeProps";
import { RecursivelyRenderedComment } from "./recursiveRenderer";
import './comment.css';

export const TextInput = ({ comments, depth } : InputProps) => {
    const [name, setName] = useState('');
    const [currComment, setComment] = useState('');
    const [postedComments, setComments] = useState(comments);
    
    const marginLeft = depth * 10;
    const maxWidth = 500 - marginLeft;

    const submitMethod = () => {
        if (name.length > 0 && currComment.length > 0) {
            const newCommentInput : RecursiveProp = {
                comment: {
                    username: name,
                    content: currComment,
                    children: [],
                    depth: depth
                }
            };
            setComments([...postedComments, newCommentInput]);
            setName('');
            setComment('');
        }
    }

    return(
        <>
        <div className="text-input-container" style={{maxWidth}}>
            <input
                type="text"
                className="name-input"
                value={name}
                placeholder='Name'
                onChange={(event) => setName(event.target.value)}
            />
            <textarea
                className="comment-input"
                value={currComment}
                onChange={(event) => setComment(event.target.value)}
            />
            <button className="button"
                onClick={submitMethod}
                >
                Submit
            </button>
        </div>
        <div>
            {postedComments.map((elem, index) => (<RecursivelyRenderedComment key={index} comment={elem.comment} />))}
        </div>
        </>
    );
}