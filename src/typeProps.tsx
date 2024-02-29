export type RecursiveProp = {
    comment: {
      username: string;
      content: string;
      children: RecursiveProp[];
      depth: number;
    };
};

export type InputProps = {
    comments : RecursiveProp[];
    depth : number;
};

export type CommentProps = {
    username: string,
    content: string,
}