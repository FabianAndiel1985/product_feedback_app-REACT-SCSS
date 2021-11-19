import React from 'react'
import  {
    colorStripe_live,
    colorStripe_planned,
    colorStripe_inProgress
   } from "./colorStripe.module.scss";

const ColorStripe = ({status}) => {
    return (
            <div
                className={(status === "inProgress" ? colorStripe_inProgress : (status==="live" ? colorStripe_live :colorStripe_planned))}
            >
            </div>
    )
}

export default ColorStripe