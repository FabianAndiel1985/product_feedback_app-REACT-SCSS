import React from "react";
import Menubar from "../../components/shared/menubar.component";
import RouteBack from "../../components/shared/routeBack.component";
import * as roadmapStyles from "./roadmap.module.scss" 
import RoadmapWhiteBox from "../../components/roadmap/RoadmapWhiteBox";


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