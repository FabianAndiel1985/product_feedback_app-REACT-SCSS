import React from 'react'
import CustomButton from '../../../../shared/button'
import * as addCommentStyles from "./addComment.module.scss"
import Input from '../../../../shared/input.component'

function AddComment({show}) {
      
    return (
        <>
        {show &&
        <div 
        className={addCommentStyles.addComment}>   
                <textarea
                rows="4"
                />
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
