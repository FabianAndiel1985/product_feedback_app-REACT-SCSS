import React from 'react'
import LongWhiteBox from './components/LongWhiteBox';
import Data from "../../../../assets/data.json";

const Main = () => {

    const {productRequests} = Data;

    console.log(productRequests);

    return (

        <>        
            <p>
            Sort by:
            Most upvotes
            Least upvotes
            Most comments
            Least comments
        
            Add Feedback
        
    
            There is no feedback yet. Got a suggestion? Found a bug that needs to be squashed? We love 
            hearing about new ideas to improve our app.
        
            Add Feedback

            </p>

            {Data && 
                productRequests.map(request=>(
                    <LongWhiteBox 
                        title={request.title}
                        description={request.description}
                        category={request.category}
                        upvotes={request.upvotes}
                        comments={request.comments}
                    />
                ))
            }
            
            {/* <LongWhiteBox/> */}
        </>
    )
}

export default Main;
