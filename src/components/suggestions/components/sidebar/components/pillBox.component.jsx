import React from 'react'
import * as styles from "./pillBox.module.scss";

const PillBox = ({children})=> {

    return (
        <div className={styles.box}>
            {children}
        </div>
    )
}

export default PillBox;