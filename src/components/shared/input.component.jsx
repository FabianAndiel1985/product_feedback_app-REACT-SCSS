import React from 'react'
import * as inputStyles from "./input.module.scss";


function Input({rows,heading}) {
    return (
        <>
            <div
            className={inputStyles.container}
            >
                {heading}
                <textarea
                className={inputStyles.customInput}
                rows = {rows}
                />
            </div>
        </>
    )
}

export default Input