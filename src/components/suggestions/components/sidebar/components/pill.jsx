import React from 'react'
import * as pillStyles from "./pill.module.scss" 



const Pill = ({text,orientation,children})=> {

    let pillClass =  orientation === "horizontal" ? pillStyles.pillHorizontal : pillStyles.pillVertical;


    return (
        <div className={pillClass}>
            <span>{text}</span>
            {children}
        </div>
    )
}

export default Pill;
