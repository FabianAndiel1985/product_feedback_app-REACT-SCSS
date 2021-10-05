import Comment from "./components/comment";


export const createComments = 
(comments)=> {  
    let lastIndex = comments.length-1; 

    return(
        [...comments].map(comment=> {

            let isLastComment = checkIfLast(comments,comment);

            if(comment && !comment.replies ) {
                return(
                    <div style={comment.replyingTo ? {marginLeft:"80px"} : {}} >
                        <Comment comment={comment} replyingTo={comment.replyingTo}/>
                            { !comment.replyingTo && !isLastComment ? <hr/> : " "}
                    </div>
                )
            }

            else if(comment && comment.replies && comment.replies.length >0) {
                let replies = comment.replies;
            
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


const checkIfLast = (comments,comment)=>{
    if(comment.content === comments[comments.length-1].content) {
        return true;
    }
    return false;
}