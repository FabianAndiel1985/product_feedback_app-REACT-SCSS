import React, {useState} from 'react';
import * as CommentStyles from './comment.module.scss';
import AddComment from './components/addComment';
 
function Comment({comment,replyingTo}) {
   
    const username = comment.user.name;
    const firstname= username.slice(0,username.indexOf(" "))
    const [showAddComment, setShowAddComment] = useState(false)
    
    return (
        <div className={CommentStyles.comment}>

            <div className={CommentStyles.firstRow}>
                                    
                <div className={CommentStyles.firstRow_firstFlexItem}>
                    <img src={process.env.PUBLIC_URL + `/images/image-${firstname}.jpg`} />
                    <div className={CommentStyles.firstRow_firstFlexItem_text}>
                        <span>{username}</span> 
                        <span style={{color:"grey"}}>@{comment.user.username}</span> 
                    </div>
                </div>

                <div className={CommentStyles.firstRow_secondFlexItem}
                     onClick={()=>setShowAddComment((prevState)=>!prevState)}
                >
                    <span>Reply</span>
                </div>
                
            </div>

            <p>
                <span>
                    {replyingTo &&  "@"+replyingTo+" "}
                </span>    
            {comment.content}
            </p>

            <AddComment show={showAddComment}/>
        </div>
    )
}

export default Comment
