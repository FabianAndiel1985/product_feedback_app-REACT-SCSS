import React from 'react'
import * as styles from "./mobileSidebar.module.scss";

const MobileSidebar = ({children})=> {

    return (
        <div 
        className={styles.box}
        > 
            {children}
        </div>
    )
}

export default MobileSidebar;