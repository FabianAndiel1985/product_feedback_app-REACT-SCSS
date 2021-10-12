import React from 'react'
import * as headingStyles from "./heading.module.scss";

function Heading({heading,subtext}) {
    return (
        <div>
            <h5
                className={headingStyles.headingtext}
            >
            {heading}
            </h5>
            <p
                className={headingStyles.subtext}
            >
            {subtext}
            </p>
        </div>
    )
}

export default Heading
