import React from "react";
import Menubar from "../../components/shared/menubar.component";
import RouteBack from "../../components/shared/routeBack.component";
import * as roadmapStyles from "./roadmap.module.scss" 
import RoadmapWhiteBox from "../../components/roadmap/RoadmapWhiteBox";
import { useSelector } from 'react-redux';
import Data from "../../assets/data.json";

const countOccurrences = (data,criteria1,criteria2,criteria3)=>{
    return {
        planned: data.filter((item)=>item.status === `${criteria1}`).length,
        inProgress: data.filter((item)=>item.status === `${criteria2}`).length,
        live:data.filter((item)=>item.status === `${criteria3}`).length
    }
}

const roadmap = ()=>{
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
            <main 
                className= {roadmapStyles.gridContainer}
            >

                {/* Mapping of long white box comes here */}
                <div>
                    <RoadmapWhiteBox/>
                </div>
                <div>
                    b
                </div>
                <div>
                    c
                </div>
                


            </main>
        </div>
    </>
    )
}


export default roadmap;