import RoadmapWhiteBox from "./RoadmapWhiteBox.jsx"
   
   
   export const createRoadmapColumn = (splitedObj,activeCategory)=>
   {
       
       return splitedObj[activeCategory].map(
        (item)=>(
            <div>
                    <RoadmapWhiteBox
                        title={item.title}
                        description={item.description}
                        upvotes={item.upvotes}
                        status={item.status}
                        upvotes={item.upvotes}
                        category={item.category}
                        comments={item.comments ? item.comments.length : 0 }
                    />
               </div>
            )
        
    )
    }
