import React from 'react'
import * as pillStyles from "./pill.module.scss" 



const Pill = ({text,orientation,children,setFilterCriteria})=> {

    let pillClass =  orientation === "horizontal" ? pillStyles.pillHorizontal : pillStyles.pillVertical;


    return (
        <div 
         className={pillClass}
         onClick={()=>setFilterCriteria(`${text}`)}
         >
            <span>{text}</span>
            {children}
        </div>
    )
}

export default Pill;
