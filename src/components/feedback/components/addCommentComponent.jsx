import React, { useState } from 'react'
import * as addCommentComponentStyles from './addCommentComponent.module.scss';
import Button from '../../shared/button.component';
import Textarea from '../../shared/textarea.component';


function AddCommentComponent() {

    const [charactersLeft, setCharactersLeft] = useState(250)
    const changeHandler = e => setCharactersLeft(250-e.target.value.length);
    

    return (
        <div className={addCommentComponentStyles.componentBasicStyles}>

            <h3>
                Add Comment
            </h3>

            {/* <textarea
                className={addCommentComponentStyles.commentArea}
                onChange={e => setCharactersLeft(250-e.target.value.length)}
            >
                Type your comment here
            </textarea> */}


            <Textarea
            onChange={changeHandler}
            placeHolderText={"Type your comment here"}
            />

            

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
