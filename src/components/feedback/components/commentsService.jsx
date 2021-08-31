import Comment from "./components/comment";


export const createComments = 
(comments)=> {  return(
        [...comments].map(comment=> {

            if(comment && !comment.replies ) {
                return(
                    <div>
                        <Comment comment={comment}/>
                        <hr/>
                    </div>
                )
            }

            else if(comment && comment.replies && comment.replies.length >0) {
                let replies = comment.replies;
                return(
                    <div>
                        <Comment comment={comment}/>
                        <p> I got a comment</p>
                        {createComments(replies)}
                    </div>
                )
            }
            }) 
        
        )
}