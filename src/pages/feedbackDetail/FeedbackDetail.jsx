import React from 'react'
import CustomButton from '../../components/shared/button';
import * as FeedbackDetailStyles from './styles.module.scss';
import LongWhiteBox from '../../components/suggestions/components/main/components/LongWhiteBox'
import data from "../../assets/data.json";
import {useParams,useHistory} from 'react-router-dom'
import Comments from '../../components/feedback/components/commentsComponent';
import AddComment from '../../components/feedback/components/addCommentComponent';
import RouteBack from '../../components/shared/routeBack.component';


function FeedbackDetail() {

    const leftArrow = <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>;
    const { id } = useParams()
    const productRequests= data.productRequests;
    const [currentLesson] = productRequests.filter((item)=>item.id === parseInt(id));
    const {comments} = currentLesson;
 
    return (
        <>
            <div className={FeedbackDetailStyles.container}>

                <div className={FeedbackDetailStyles.firstLine}>
                    <RouteBack/>
                    <CustomButton 
                        text={"Edit Feedback"}
                        color={"#4661E6"}
                    /> 
                </div>

                <LongWhiteBox
                    title={currentLesson.title}
                    description={currentLesson.description}
                    category={currentLesson.category}
                    upvotes={currentLesson.upvotes}
                    comments={currentLesson.comments}
                    linkFurther={false}
                    id={""}
                />
                    
                <Comments comments={comments}/>

                <AddComment  show={false}
                />
                
            </div>


        </>
    )
}

export default FeedbackDetail
