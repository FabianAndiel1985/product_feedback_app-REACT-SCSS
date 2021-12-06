import React, {useState} from "react";
import Menubar from "../../components/shared/menubar.component";
import RouteBack from "../../components/shared/routeBack.component";
import * as roadmapStyles from "./roadmap.module.scss" 
import Data from "../../assets/data.json";
import { splitIntoCategories,countOcc } from "../../components/suggestions/components/sidebar/sidebar.services";
import CategorySwitch from "../../components/roadmap/categorySwitch.component";
import {createRoadmapColumn} from "../../components/roadmap/roadmap.service.jsx";
import { createRoadmapColumns } from "../../components/suggestions/components/sidebar/sidebar.services";
import useWindowDimensions from "../../helpers/getWindowDimensions.hook";


const Roadmap = ()=>{

    const {width} = useWindowDimensions();

    const [activeCategory, setActiveCategory] = useState("live");

    const {productRequests} = Data;

    const handleCategorySwitch = (param)=>{
        setActiveCategory(param);
    }

    let splitedObj = splitIntoCategories(productRequests,["planned","in-progress","live"]);
 
    const occurences = countOcc(splitedObj);

    const singleSuggestionsColumn = createRoadmapColumn(splitedObj,activeCategory);
    
    const suggestionsColumnsArray= createRoadmapColumns(splitedObj)
    
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


                {width < 700 ? singleSuggestionsColumn : null} 

                
                {width >= 700 ?   <> 
                                    {
                                        suggestionsColumnsArray.map((item=>{
                                            return(
                                                item
                                            )
                                        }))

                                    }
                                </> : null
                } 

            </main>
        </div>
    </>
    )
}


export default Roadmap;