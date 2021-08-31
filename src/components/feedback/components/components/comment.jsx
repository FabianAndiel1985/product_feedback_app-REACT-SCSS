import React from 'react';
import * as CommentStyles from './comment.module.scss';

 
function Comment({comment}) {
   
    const username = comment.user.name;
    const firstname= username.slice(0,username.indexOf(" "))
    
    return (
        <div>
            <div className={CommentStyles.firstRow}>
                                    
                <div className={CommentStyles.firstRow_firstFlexItem}>
                    <img src={process.env.PUBLIC_URL + `/images/image-${firstname}.jpg`} />
                    <div className={CommentStyles.firstRow_firstFlexItem_text}>
                        <span>{username}</span> 
                        <span style={{color:"grey"}}>@{comment.user.username}</span> 
                    </div>
                </div>

                <div className={CommentStyles.firstRow_secondFlexItem}>
                    <span>Reply</span>
                </div>
                
            </div>

            <p>
            {comment.content}
            </p>

        </div>
    )
}

export default Comment
