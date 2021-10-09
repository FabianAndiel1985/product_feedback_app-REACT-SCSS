import React, { useState } from 'react'
import * as addCommentComponentStyles from './addCommentComponent.module.scss';
import Button from '../../shared/button';


function AddCommentComponent() {

    const [charactersLeft, setCharactersLeft] = useState(250)


    return (
        <div className={addCommentComponentStyles.componentBasicStyles}>

            <h3>
                Add Comment
            </h3>

            <textarea
                onChange={e => setCharactersLeft(250-e.target.value.length)}
            >
                Type your comment here
            </textarea>

            <div className={addCommentComponentStyles.componentBasicStyles_bottomRow}>       
                <div className={addCommentComponentStyles.componentBasicStyles_bottomRow_firstItem}>     
                    {charactersLeft} Characters left
                </div>
                <Button
                    text={"Post Comment"}
                />
            </div>

        </div>
    )
}





export default AddCommentComponent