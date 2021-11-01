import React from "react";
import Menubar from "../../components/shared/menubar.component";
import RouteBack from "../../components/shared/routeBack.component";
import * as roadmapStyles from "./roadmap.module.scss" 



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
                <div>
                    a
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