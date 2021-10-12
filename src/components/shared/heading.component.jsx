import React from 'react'
import * as headingStyles from "./heading.module.scss";

function Heading({heading,subtext}) {
    return (
        <div>
            <h5
            className={headingStyles.heading}
            >
            {heading}
            </h5>
            <p>
            {subtext}
            </p>
        </div>
    )
}

export default Heading
