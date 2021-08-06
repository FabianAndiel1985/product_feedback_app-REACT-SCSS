import { useState } from "react";
import * as customButtonStyles from "./button.module.scss";

function CustomButton({text,color,hoverColor}) {
    
    const [bgColor, setBgColor] = useState(color)
    
    const handleMouseEnter= ()=>{
        setBgColor(hoverColor)
    }

    const handleMouseLeave= ()=>{
        setBgColor(color)
    }

    return (

        <button className={customButtonStyles.buttonStyle}
            style={{backgroundColor:bgColor}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </button>

    )
}

export default CustomButton
