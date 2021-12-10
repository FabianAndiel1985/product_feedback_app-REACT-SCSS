import React from 'react'
import CustomButton from '../../../../shared/button.component'
import * as addCommentStyles from "./addComment.module.scss"
import Textarea from '../../../../shared/textarea.component'

function AddComment({show}) {
      
    return (
        <>
        {show &&
        <div 
        className={addCommentStyles.addComment}>   
                {/* <textarea
                rows="4"
                /> */}
                <Textarea/>
            <CustomButton
                text= {"Post Reply"}
                color={"#4661E6"}
            />
        </div>
        }
        </>
    )
    
}

export default AddComment
