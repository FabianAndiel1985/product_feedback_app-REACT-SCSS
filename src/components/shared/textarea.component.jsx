import React from 'react'
import * as textareaStyles from "./textarea.module.scss"

const Textarea= ({onChange,placeHolderText}) => {
    return (
        <>
         <textarea
         className={textareaStyles.textarea}
         onChange={onChange}
         >
             {placeHolderText}
        </textarea>   
        </>
    )
}

export default Textarea
