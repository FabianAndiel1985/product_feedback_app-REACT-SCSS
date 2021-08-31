import Comment from "./components/comment";


export const createComments = 
(comments)=> {  return(
        [...comments].map(comment=> {

            if(comment && !comment.replies ) {
                return(
                    <div>
                        <Comment comment={comment} replyingTo={comment.replyingTo}/>
                        <hr/>
                    </div>
                )
            }

            else if(comment && comment.replies && comment.replies.length >0) {
                let replies = comment.replies;
                console.log(replies)
                return(
                    <div>
                        <Comment comment={comment}/>
                        {createComments(replies)}
                    </div>
                )
            }
            }) 
        
        )
}