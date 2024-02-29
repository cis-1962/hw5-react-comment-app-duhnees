import { useState } from "react";
import './comment.css';

export const Votes = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button className="up-vote-button"
                onClick={() => setCount(count + 1)}
                >
                Upvote
            </button>
            <p>{count}</p>
            <button className="down-vote-button"
                onClick={() => setCount(count - 1)}
                >
                Downvote
            </button>
        </div>  
    );
}