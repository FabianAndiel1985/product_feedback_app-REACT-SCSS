import React from 'react'
import { useSelector } from 'react-redux';
import LongWhiteBox from './components/longWhiteBox.component';
import NoFeedback from './components/noFeedback.component';
import {sortData} from './sorting.service'
import noFeedback from '../../../../assets/illustration-empty.svg'

const Main = ({data}) => {

    const illustrationEmpty = <img src={noFeedback} alt="icon" /> 

    const sortingCriteria = useSelector(state => state.sortingCriteria) 
    
    data = sortData(sortingCriteria,data);


    return (
        <>     
            {data ?
                data.map(request=>(
                    <LongWhiteBox 
                        title={request.title}
                        description={request.description}
                        category={request.category}
                        upvotes={request.upvotes}
                        comments={request.comments}
                        linkFurther={request.comments ? true : false}
                        id={request.id}
                    />
                ))
                :
                <NoFeedback
                illustration ={illustrationEmpty} 
                />
            }
        </>
    )
}

export default Main;
