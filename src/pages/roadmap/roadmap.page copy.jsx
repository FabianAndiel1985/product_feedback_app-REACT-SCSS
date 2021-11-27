import React, {useState} from "react";
import Menubar from "../../components/shared/menubar.component";
import RouteBack from "../../components/shared/routeBack.component";
import * as roadmapStyles from "./roadmap.module.scss" 
import Data from "../../assets/data.json";
import { splitIntoCategories,countOcc } from "../../components/suggestions/components/sidebar/sidebar.services";
import CategorySwitch from "../../components/roadmap/categorySwitch.component";
import {createRoadmapColumn} from "../../components/roadmap/roadmap.service.jsx";
import useWindowDimensions from "../../helpers/getWindowDimensions.hook";


const Roadmap = ()=>{

    const { height, width } = useWindowDimensions();

    const [activeCategory, setActiveCategory] = useState("live");

    const {productRequests} = Data;

    const handleCategorySwitch = (param)=>{
        setActiveCategory(param);
    }

    let splitedObj = splitIntoCategories(productRequests,["planned","in-progress","live"]);
 
    let occurences = countOcc(splitedObj);

    const presentedSuggestions = createRoadmapColumn(splitedObj,activeCategory);
    let presentedSuggestions1 = createRoadmapColumn(splitedObj,"planned");
    let presentedSuggestions2 = createRoadmapColumn(splitedObj,"inProgress");
    let presentedSuggestions3 = createRoadmapColumn(splitedObj,"live");
    
    const roadmapColumnDirection1 = (<div> {presentedSuggestions1} </div>)
    const roadmapColumnDirection2 = (<div> {presentedSuggestions2} </div>)
    const roadmapColumnDirection3 = (<div> {presentedSuggestions3} </div>)

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


                {width < 700 ? presentedSuggestions : null
                } 

                
                {width >= 700 ?   <> 
                                    {roadmapColumnDirection1}
                                    {roadmapColumnDirection2} 
                                     {roadmapColumnDirection3}
                                </> : null
                } 
 

                

               

             



            </main>
        </div>
    </>
    )
}


export default Roadmap;