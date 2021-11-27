import React, {useState} from "react";
import Menubar from "../../components/shared/menubar.component";
import RouteBack from "../../components/shared/routeBack.component";
import * as roadmapStyles from "./roadmap.module.scss" 
import RoadmapWhiteBox from "../../components/roadmap/RoadmapWhiteBox";
import Data from "../../assets/data.json";
import { splitIntoCategories,countOcc } from "../../components/suggestions/components/sidebar/sidebar.services";
import CategorySwitch from "../../components/roadmap/categorySwitch.component";
import {transformIntoNodeObject} from "../../components/roadmap/roadmap.service.jsx";
import useWindowDimensions from "../../helpers/getWindowDimensions.hook";


const Roadmap = ()=>{

    const { height, width } = useWindowDimensions();

    const [activeCategory, setActiveCategory] = useState("live");

    const {productRequests} = Data;

    const handleCategorySwitch = (param)=>{
        setActiveCategory(param);
    }

    let splitedObj = splitIntoCategories(productRequests,["planned","in-progress","live"]);
    console.log(splitedObj);
    
    let occurences = countOcc(splitedObj);
    
   
  
    const presentedSuggestions = splitedObj[activeCategory].map(
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


    

   

return(
    <>
        <div 
        className={roadmapStyles.roadmapContainer}
        >
            <header>
                <Menubar>
                    <div
                    className={roadmapStyles.menuHeadingElements}
                    >
                        <RouteBack/>
                        <span
                            className={roadmapStyles.menuHeading}
                        >
                            Roadmap
                        </span>
                    </div>
                </Menubar>
            </header>
            <CategorySwitch
                categories={occurences}
                click={width < 700 ? handleCategorySwitch :null}
            />
            

            <main 
                className= {roadmapStyles.gridContainer}
            >


                {width < 700 ? presentedSuggestions : 
                "nef"
                } 

                

               

                   });



            </main>
        </div>
    </>
    )
}


export default Roadmap;