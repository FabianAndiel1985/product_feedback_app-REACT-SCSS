import commentsStyle from './comments.module.scss';
import { createComments } from './commentsService';

function commentsComponent({comments}) {

    const commentsMapped = createComments(comments)
    
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
