//here would be body of comment and button and upvote/downvote
type PostedProps = {
    username: string;
    comment: string;
};

export const PostedComment = ({username, comment} : PostedProps) => {
    return(
        <div>
            <p>{username}</p>
            <p>{comment}</p>
        </div>
    );
}