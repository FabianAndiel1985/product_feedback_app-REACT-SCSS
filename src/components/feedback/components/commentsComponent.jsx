import React from 'react'
import Comment from './components/comment'
import commentsStyle from './comments.module.scss';
import { createComments } from './commentsService';

function commentsComponent({comments}) {

    console.log(comments)
  
    // const commentsMapped = [...comments].map(comment=> {

    //     if(comment && !comment.replies ) {
    //         return(
    //             <div>
    //                 <Comment comment={comment}/>
    //                 <hr/>
    //             </div>
    //         )
    //     }

    //     else if(comment && comment.replies && comment.replies.length >0) {
    //         return(
    //             <div>
    //                 <Comment comment={comment}/>
    //                 <p> I got a comment</p>
    //             </div>
    //         )
    //     }
    //     }) 
    // ;

    const commentsMapped = createComments(comments)
    console.log(commentsMapped)

    return (
        <div 
        className={commentsStyle.commentsBackground}
        >
           <div className={commentsStyle.commentsBackground_amountComments}> 
               {comments.length} Comments 
            </div>

            {commentsMapped}
        </div>
    )
}

export default commentsComponent
