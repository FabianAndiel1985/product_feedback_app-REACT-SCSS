import React from 'react'
import * as pillStyles from "./pill.module.scss" 

const Pill = ({text})=> {
    return (
        <div className={pillStyles.pill}>
            <span>{text}</span>
        </div>
    )
}

export default Pill;
