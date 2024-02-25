type NameProps = {
    name: string;
    setName: (name: string) => void;
};
  
export const NameInput = ({name, setName} : NameProps) => {
    return(
      <div>
        <input
          type="text"
          value={name}
          placeholder='Name'
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    );
}

type CommentProps = {
    comment: string;
    setComment: (comment: string) => void;
};

export const CommentInput = ({comment, setComment} : CommentProps) => {
    return(
        <div>
          <input
            type="text"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
    );
}

type ButtonProps = {
    clickFunction: () => void;
};

export const CommentButton = ({clickFunction} : ButtonProps) => {
  return (
    <div>
      <button
        onClick={clickFunction}
        >
        Submit
      </button>
    </div>
  );
}