import React from 'react'
import CustomButton from '../../../../shared/button'
import * as addCommentStyles from "./addComment.module.scss"

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
                hoverColor={"#c75af6"}
            />
        </div>
        }
        </>
    )
    
}

export default AddComment
