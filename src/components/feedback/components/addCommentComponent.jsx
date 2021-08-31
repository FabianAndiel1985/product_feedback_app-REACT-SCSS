import React, { useState } from 'react'
import * as addCommentComponentStyles from './addCommentComponent.module.scss';


function AddCommentComponent() {

    const [charactersLeft, setCharactersLeft] = useState(250)


    return (
        <div className={addCommentComponentStyles.componentBasicStyles}>

            <h4>
                Add Comment
            </h4>

            <textarea
                onChange={e => setCharactersLeft(250-e.target.value.length)}
            >
                Type your comment here
            </textarea>

            <div className={addCommentComponentStyles.componentBasicStyles_bottomRow}>       
                <span>     
                    {charactersLeft} Characters left
                </span>
                <span>
                    Post Comment
                </span>
            </div>

        </div>
    )
}





export default AddCommentComponent
