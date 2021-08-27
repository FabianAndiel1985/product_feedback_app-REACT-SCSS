import React from 'react'
import CustomButton from '../shared/button';
import * as FeedbackDetailStyles from './styles.module.scss';
import LongWhiteBox from '../suggestions/components/main/components/LongWhiteBox'

function FeedbackDetail() {

    const leftArrow = <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>;

    return (
        <>
            <div className={FeedbackDetailStyles.firstLine}>
                <p> {leftArrow} Go Back</p> 
                <CustomButton 
                    text={"Edit Feedback"}
                    color={"#4661E6"}
                    hoverColor={"#c75af6"}
                /> 
            </div>

            <LongWhiteBox/>


            Komponente für Beitrag


            Kommentare


    Reply



  Add Comment
  Type your comment here
  250 Characters left

  Post Comment
        </>
    )
}

export default FeedbackDetail
