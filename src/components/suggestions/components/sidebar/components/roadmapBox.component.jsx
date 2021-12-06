import React from 'react'
import * as styles from "./roadmapBox.module.scss";

const RoadmapBox = ({click,children})=> {

    return (
        <div className={styles.box }> 
            <div> 
                    <span>
                        Roadmap
                    </span> 
                    <a 
                    onClick={click}
                    >
                        View
                    </a>
            </div>

            <ul>
                {children}
            </ul>         
        </div>
    )
}

export default RoadmapBox;